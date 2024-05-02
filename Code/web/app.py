from flask import Flask, render_template, request, jsonify, send_from_directory
from dotenv import load_dotenv
import numpy as np
import json
import numpy as np # # Initialize the tokenizer and model
from text_viewer import TextViewer

from titan_api import call_titan_api

def load_data(file_path):
    # Load the dataset
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

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
    
    # Send API call to get SDR pairs
    # Read data from example.json

    with open('example.json', 'r') as f:
        data = json.load(f)

    prompt = "Based on the following context, summarise the differences provided with the following scores. The scores indicate how much emphasis you should put on the specific difference in the summary, with the higher scores being more important.\n"
    prompt += json.dumps(data)

    # Generate mega report using prompt and call_titan_api
    summary = call_titan_api(prompt)

    pairs = process_pairs(data)

    print(summary)

    response_data = {
        "summary": summary,
        "pairs": pairs
    }
    return jsonify(response_data)

def process_pairs(data):
    # Process the JSON data and create (score, SDR) pairs
    SCORE_THRESHOLD = 0.05
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
