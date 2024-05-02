import os
import openai
from typing import List, Tuple
import json
from flask import Flask, render_template, request

with open('utils/sections.json', 'r') as file:
    data = json.load(file)

sections = data['sections']

# Use the sections data in your functions

# Set up the OpenAI API key
openai.api_key = os.environ.get("OPENAI_API_KEY")

# Define the sections to compare
section1 = "This is the content of the first section..."
section2 = "This is the content of the second section..."

# Prepare the prompt for ChatGPT
prompt = f"""
I want you to identify and highlight significant changes in two text samples provided - OLD and NEW. Respond only with two lists, one for additions and the other for deletions in the NEW text as compared to the OLD. Report both additions and deletions as phrases reproduced from the NEW and OLD documents respectively.

Section 1  OLD:
{section1}

Section 2 New: 
{section2}

In your report, please focus on:
- Identifying the main points of difference between the two sections
- Summarizing the key insights or information that is unique to each section
- Providing an overall assessment of how the sections differ in terms of content, tone, or perspective

Please structure your response in a clear manner.
"""

# Generate the comparison report using ChatGPT
response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.7,
)

# Extract the comparison report from the ChatGPT response
comparison_report = response.choices[0].text.strip()

# Print the comparison report
print(comparison_report)


@app.route('/compare_sections', methods=['POST'])
def compare_sections():
    section1 = request.form['section1']
    section2 = request.form['section2']
    comparison_report = generate_comparison_report(section1, section2)
    return render_template('comparison_report.html', report=comparison_report)

@app.route('/generate_final_report', methods=['POST'])
def generate_final_report_route():
# comes from the json file
    report_scores = {
        "difference report1": 0.8,
        "difference report2": 0.6,
        "difference report3": 0.9,
    }

    # Sort the report scores from highest to lowest dissimilarity
    sorted_report_scores = sort_report_scores(report_scores)

    # Generate the final report
    final_report = generate_final_report(report_scores)

    return render_template('final_report.html', report=final_report, sorted_scores=sorted_report_scores, sections=sections)
