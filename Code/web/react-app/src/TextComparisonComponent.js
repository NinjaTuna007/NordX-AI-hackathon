import { useState, useMemo, useEffect, useRef } from 'react';
import RichTextExample from './components/RichText.js';

function TextComparisonComponent() {
  const [textFile1, setTextFile1] = useState('');
  const [textFile2, setTextFile2] = useState('');
  const [summary, setSummary] = useState('');
  const [pairs, setPairs] = useState([]);

  const handleFileUpload1 = (event) => {
    setTextFile1(event.target.files[0]);
  };

  const handleFileUpload2 = (event) => {
    setTextFile2(event.target.files[0]);
  };

  const handleCompareText = async (event) => {
    event.preventDefault();

    // Create a dictionary with the text from the input fields
    const textData = {
      "OLD": textFile1,
      "NEW": textFile2
    };

    try {
      const response = await fetch('/api/compare-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(textData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSummary(data.summary);
      setPairs(data.pairs);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload1} />
      <input type="file" onChange={handleFileUpload2} />
      <button onClick={handleCompareText}>Compare Text</button>
      <h2>Summary</h2>
      <RichTextExample newValue={summary}></RichTextExample>
      <h2>Differences</h2>
      <ul>
        {pairs.map((diff, index) => (
          <li key={index}>
            <p>Score: {diff.score}</p>
            <p>{diff.SDR}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TextComparisonComponent;
