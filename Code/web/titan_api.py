"""

import boto3
import json

brt = boto3.client(service_name='bedrock-runtime', region_name='us-west-2')

def call_titan_api(input_text):
    body = json.dumps({
        "inputText": input_text,
        "textGenerationConfig": {
            "maxTokenCount": 4096,
            "stopSequences": ["User:"],
            "temperature": 0,
            "topP": 1
        }
    })

    model_id = 'amazon.titan-text-g1'
    accept = 'application/json'
    content_type = 'application/json'

    response = brt.invoke_model(body=body, modelId=model_id, accept=accept, contentType=content_type)
    response_body = json.loads(response.get('body').read())

    # Get the generated text
    #generated_text = response_body.get('completion')
    generated_text = response_body["results"][0]["outputText"]
    return generated_text

call_titan_api("Hello World")

"""

import requests
import json

# The URL of the API endpoint
url = 'https://jmahavdnswdhhvuhhitskro3xa0yhott.lambda-url.us-west-2.on.aws/'

def call_titan_api(input_text):
    # Optional: Parameters to send with the request (if needed)
    params = {
        "inputText": input_text,
    }

    # Making a GET request
    response = requests.get(url, params=params)

    #print(response)
    # Check if the request was successful
    if response.status_code == 200:
        # Process the response data (if response is JSON)
        data = response.json()['body']
        generated_text = json.loads(data)["text"]
        return generated_text
    else:
        print(f"Failed to retrieve data: {response.status_code}")