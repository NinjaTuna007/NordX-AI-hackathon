import os
import json
from flask import Flask, render_template, request, jsonify

class TextViewer:
    def toggle_template(self):
        return render_template('text_viewer.html')
    
    def save_text_to_json(self, text_data):
        # Get the path to the directory where the script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))

        # Create the file path for the JSON file
        json_file = os.path.join(script_dir, 'text_data.json')

        """
        # Save the text data to the JSON file
        with open(json_file, 'w') as f:
            json.dump(text_data, f, indent=4)
        """

        return jsonify({'message': 'Text data saved to JSON file'})