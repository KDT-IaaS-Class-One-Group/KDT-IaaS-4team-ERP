import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // JSON 파일 경로 설정
    //* process.cwd() 현재 작업 디렉토리의 경로를 얻을 수 있다.
    const filePath = path.join(process.cwd(), './dummydata.json');
    
    // JSON 파일 읽기
    const data = await fs.readFile(filePath, 'utf8');
    
    // 읽은 데이터를 JSON 형태로 파싱
    const jsonData = JSON.parse(data);

    // 클라이언트에 JSON 데이터 응답
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}