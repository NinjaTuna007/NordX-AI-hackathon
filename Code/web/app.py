from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import os
#import pinecone
#from openai import OpenAI
import numpy as np
import json
#import tensorflow as tf
#from transformers import BertTokenizer, TFBertModel
import numpy as np # # Initialize the tokenizer and model
import complete
from utils.chatgpt_integration import generate_comparison_report

#import complete
#import tkinter as tk
from text_viewer import TextViewer
import boto3


def load_data(file_path):
    # Load the dataset
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

data = load_data('FreeCoursePartList.txt')

# """
# # Initialize the tokenizer and model
# model_name = 'bert-base-cased'
# tokenizer = BertTokenizer.from_pretrained(model_name)
# model = TFBertModel.from_pretrained(model_name)
# """


# Extract descriptions from your data
descriptions = [item['Description'] for item in data]


# use the the enocoding function to generate embeddings
load_dotenv()  # This loads the environment variables from `.env`.

# Now you can access your API key (or any other environment variable) like this:

app = Flask(__name__)



# def extract_text_from_pdf(pdf_bytes):
#     textract = boto3.client('textract')
#     response = textract.detect_document_text(Document={'Bytes': pdf_bytes})
#     text = ""
#     for item in response["Blocks"]:
#         if item["BlockType"] == "LINE":
#             text += item["Text"] + "\n"
#     return text

# @app.route('/upload-pdf', methods=['POST'])
# def upload_pdf():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400
#     if file and file.filename.endswith('.pdf'):
#         pdf_bytes = file.read()
#         extracted_text = extract_text_from_pdf(pdf_bytes)
#         return jsonify({"text": extracted_text})
#     else:
#         return jsonify({"error": "Unsupported file type"}), 400



# """
# @app.route("/") 
# # what is displayed for the main page
# def index():
#     return render_template("chat.html")


# @app.route("/get", methods=["GET", "POST"])
# #gets the user input, we get this from the html input field msg 
# def chat():
#     msg = request.form.get("msg")
#     input = msg
#     return get_Chat_response(input)

# # chat() gets the input from the msg field and then get_Chat_response proccess it
# def get_Chat_response(query):
#     return complete.execution(query)
# """

# Configure AWS credentials and region
aws_access_key_id = 'ASIA2P574NWBKK7X6CMU'
aws_secret_access_key = 'F1hlF+WMT+dC1aTmNjSYfDXj3xa9e4AJdZYJb5AQ'
aws_region = 'us-west-2'

# Create a Lambda client
lambda_client = boto3.client('lambda',
                            aws_access_key_id=aws_access_key_id,
                            aws_secret_access_key=aws_secret_access_key,
                            region_name=aws_region)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/invoke-lambda', methods=['POST'])
def invoke_lambda():
    function_name = request.json['functionName']
    payload = request.json['payload']

    try:
        response = lambda_client.invoke(
            FunctionName=function_name,
            Payload=payload.encode()
        )

        return jsonify({
            'body': response['Payload'].read().decode(),
            'status': response['StatusCode']
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/text-viewer')
def text_viewer():
    text_viewer = TextViewer()
    return text_viewer.toggle_template()

@app.route('/save-text', methods=['POST'])
def save_text():
    text_viewer = TextViewer()
    text_data = request.get_json()

    text_viewer.save_text_to_json(text_data) # Or just send it through the API call
    # Send API call to get SDR pairs
    # Read data from example.json

    with open('example.json', 'r') as f:
        data = json.load(f)
    pairs = process_pairs(data)

    return jsonify(pairs=pairs)

def process_pairs(data):
    # Process the JSON data and create (score, SDR) pairs
    SCORE_THRESHOLD = 7
    pairs = []
    for section_id, section_data in data.items():
        score = section_data['score']
        sdr = section_data['SDR']
        if score <= SCORE_THRESHOLD:
            pairs.append((score, sdr))

    # Sort the pairs in ascending order based on the score
    pairs.sort(key=lambda x: x[0])

    return pairs;


@app.route('/show-accordion', methods=['POST'])
def show_accordion():
    return render_template('accordion.html')

@app.route('/compare_sections', methods=['POST'])
def compare_sections():
    section1 = request.form['section1']
    section2 = request.form['section2']
    comparison_report = generate_comparison_report(section1, section2)
    return render_template('comparison_report.html', report=comparison_report)


if __name__ == "__main__":
    app.run()