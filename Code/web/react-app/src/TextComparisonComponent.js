import React, { useState } from 'react';

const TextComparisonComponent = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [summary, setSummary] = useState('');
  const [differences, setDifferences] = useState([]);

  const handleFileUpload1 = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFileUpload2 = (event) => {
    setFile2(event.target.files[0]);
  };

  const handleCompareText = () => {
    const textData = {
      "OLD": file1,
      "NEW": file2
    };

    fetch('/api/compare-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(textData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSummary(data.summary);
        setDifferences(data.pairs);
      })
      .catch((error) => {
        console.error('Error comparing text:', error);
      });
  };

  return (
    <div>
      <h1>Text Comparison</h1>
      <input type="file" onChange={handleFileUpload1} />
      <input type="file" onChange={handleFileUpload2} />
      <button onClick={handleCompareText}>Compare Text</button>
      <h2>Summary</h2>
      <p>{summary}</p>
      <h2>Differences</h2>
      <ul>
        {differences.map((diff, index) => (
          <li key={index}>
            <p>Score: {diff.score}</p>
            <p>{diff.SDR}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextComparisonComponent;
