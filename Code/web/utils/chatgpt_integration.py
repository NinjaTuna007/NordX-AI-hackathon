import os
import openai

# Set up the OpenAI API key
openai.api_key = os.environ.get("OPENAI_API_KEY")

# Define the sections to compare
section1 = "This is the content of the first section..."
section2 = "This is the content of the second section..."

# Prepare the prompt for ChatGPT
prompt = f"""
Please compare the following two sections and provide a report highlighting the key differences between them:

Section 1:
{section1}

Section 2: 
{section2}

In your report, please focus on:
- Identifying the main points of difference between the two sections
- Summarizing the key insights or information that is unique to each section
- Providing an overall assessment of how the sections differ in terms of content, tone, or perspective

Please structure your response in a clear and concise manner, with appropriate headings and formatting.
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
