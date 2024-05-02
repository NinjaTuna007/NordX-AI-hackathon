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
#import complete
#import tkinter as tk
from text_viewer import TextViewer


def load_data(file_path):
    # Load the dataset
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

data = load_data('FreeCoursePartList.txt')

"""
# Initialize the tokenizer and model
model_name = 'bert-base-cased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = TFBertModel.from_pretrained(model_name)
"""


# Extract descriptions from your data
descriptions = [item['Description'] for item in data]



# use the the enocoding function to generate embeddings
load_dotenv()  # This loads the environment variables from `.env`.

# Now you can access your API key (or any other environment variable) like this:

app = Flask(__name__)
"""
@app.route("/") 
# what is displayed for the main page
def index():
    return render_template("chat.html")


@app.route("/get", methods=["GET", "POST"])
#gets the user input, we get this from the html input field msg 
def chat():
    msg = request.form.get("msg")
    input = msg
    return get_Chat_response(input)

# chat() gets the input from the msg field and then get_Chat_response proccess it
def get_Chat_response(query):
    return complete.execution(query)
"""

@app.route('/text-viewer')
def text_viewer():
    text_viewer = TextViewer()
    return text_viewer.toggle_template()

@app.route('/save-text', methods=['POST'])
def save_text():
    text_viewer = TextViewer()
    text_data = request.get_json()
    return text_viewer.save_text_to_json(text_data)



@app.route('/compare_sections', methods=['POST'])
def compare_sections():
    section1 = request.form['section1']
    section2 = request.form['section2']
    comparison_report = generate_comparison_report(section1, section2)
    return render_template('comparison_report.html', report=comparison_report)


if __name__ == "__main__":
    app.run()