import numpy as np
import re
import json

def extract(text_path):
    with open(text_path, 'r') as f:
        text = f.read()

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

if __name__ == '__main__':
    text_path = './NEW.txt'
    text = extract(text_path)
    print(json.dumps(text, indent=4))