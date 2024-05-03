from flask import Flask, render_template, request, jsonify, send_from_directory
from dotenv import load_dotenv
import numpy as np
import json
import re
import requests
import numpy as np # # Initialize the tokenizer and model
from text_viewer import TextViewer

from prompts import prompt_sdr

from titan_api import call_titan_api

def load_data(file_path):
    # Load the dataset
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def extract(text):
    section_pattern = r"(?:Section )(\w+)(?:\n\n)([,A-Za-z0-9_ -]+)"
    subsection_pattern = r"(?:Subsection )(\w+)(?:\n\n)([,A-Za-z0-9_ -]+)"
    article_pattern = r"(?:Article )(\w+)(?:\n\n)([,A-Za-z0-9_ -]+)(?:\n\n)([\s\S]+?)(?=(?:Article \w+\n)|(?:Subsection \w+\n)|(?:Section \w+\n)|($))"

    p_section =  re.compile(section_pattern)
    p_subsection = re.compile(subsection_pattern)
    p_article = re.compile(article_pattern)

    result = []

    for m in p_section.finditer(text):
        res = {
            "position": m.start(),
            "type": "section",
            "id": m.group(1),
            "title": m.group(2)
        }
        result.append(res)

    for m in p_subsection.finditer(text):
        res = {
            "position": m.start(),
            "type": "subsection",
            "id": m.group(1),
            "title": m.group(2)
        }
        result.append(res)

    for m in p_article.finditer(text):
        res = {
            "position": m.start(),
            "type": "article",
            "id": m.group(1),
            "title": m.group(2).strip(),
            "content": m.group(3).strip()
        }
        result.append(res)

    result = sorted(result, key=lambda x: x["position"])
    
    return result


def extract_article_pairs(old, new):
    old_text = extract(old)
    new_text = extract(new)

    pairs = []
    for old_section in old_text:
        found = False
        if old_section['type'] != 'article':
            continue
        for new_section in new_text:
            if old_section['id'] == new_section['id']:
                pairs.append((old_section, new_section, old_section['position'], old_section['id'], old_section['title']))
                found = True
                break
        if not found:
            pairs.append((old_section, {'content': ''}
                          , old_section['position'], old_section['id'], old_section['title']))

    for new_section in new_text:
        found = False
        if new_section['type'] != 'article':
            continue
        for old_section in old_text:
            if old_section['id'] == new_section['id']:
                found = True
                break
        if not found:
            pairs.append(({'content': ''}, new_section, new_section['position'], new_section['id'], new_section['title']))

    pairs = sorted(pairs, key=lambda x: x[2])
    return pairs

# use the the enocoding function to generate embeddings
load_dotenv()  # This loads the environment variables from `.env`.


app = Flask(__name__, static_folder='react-app/build', static_url_path='/')

@app.route('/')
def serve_react_app(path=''):
    #return send_from_directory('react-app/build', path)
    return send_from_directory('react-app/build', 'index.html')

@app.route('/api/compare-text', methods=['POST'])
def compare_text():
    data = request.get_json()
    old_text = data['OLD']
    new_text = data['NEW']

    # text_viewer.save_text_to_json(text_data) # Or just send it through the API call
    data = {}
    pairs = extract_article_pairs(old_text, new_text)

    # Send API call to get SDR pairs
    # Read data from example.json
    url = 'https://fdbhhaqp4i.execute-api.us-west-2.amazonaws.com/NordXDev/'
    seperate_char = "@"
    for pair in pairs:
        # print(pair)
        inputTextsStr = seperate_char.join([pair[0]['content'], pair[1]['content']])
        params = {
        "inputTexts": inputTextsStr,
        "articleNumber": pair[3],
        "operation": "GetDifference"
        }
        response = requests.get(url, params=params)
        SDR = response.json()['body']
        SDR = json.loads(SDR)
        SDR = SDR['generation']

        params = {
        "inputTexts": inputTextsStr,
        "operation": "GetEmbeddingsAndSimilarity"
        }
        response = requests.get(url, params=params)
        dataMatrix = json.loads(response.json()['body'])["distance"][0][1]
        # print([pair[0]['content'], pair[1]['content']])
        # print(SDR)
        # print(dataMatrix)


        d = {"SDR": SDR, "ID": pair[3], "Title": pair[4], "score": dataMatrix, "old": pair[0]['content'], "new": pair[1]['content']}
        data[pair[3]] = d


    # with open('example.json', 'r') as f:
    #     data = json.load(f)
    
    pairs = process_pairs(data)
    sdrs = [pair['SDR'] for pair in pairs]

    # Add 2 newlines between every sdrs item and add it to the prompt
    prompt = prompt_sdr + '\n\n'.join(sdrs)
    prompt = prompt.replace("`", "")

    #print('\n\n'.join(sdrs))

    print(prompt)
    
    # Generate mega report using prompt and call_titan_api
    summary = call_titan_api(prompt)
    print(summary)

    response_data = {
        "summary": summary,
        "pairs": pairs
    }
    return jsonify(response_data)

def process_pairs(data):
    # Process the JSON data and create (score, SDR) pairs
    SCORE_THRESHOLD = 0
    pairs = []
    for section_id, section_data in data.items():
        score = section_data['score']
        sdr = section_data['SDR']
        if score >= SCORE_THRESHOLD:
            # Append a dictionary with 'score' and 'SDR' keys instead of a tuple
            pairs.append({'score': score, 'SDR': sdr})

    # Sort the pairs in ascending order based on the score
    pairs.sort(key=lambda x: x['score'])
    return pairs


if __name__ == "__main__":
    app.run()
