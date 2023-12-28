"use client"

import readJsonFile from './lib/datajoin'
import React, {useState} from 'react'

const MyButton: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  const handleButtonClick = async () => {
    try {
      const data = await readJsonFile('./dummy.json'); // JSON 파일 경로
      setJsonData(data);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Read JSON File</button>
      {jsonData && (
        <div>
          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyButton;