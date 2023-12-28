import fs from 'fs';
import path from 'path';

// 파일 경로 지정
const dataPath = path.join(process.cwd(), 'data', 'classroom.json');

// 데이터 불러오기
export const readData = () => {
  const fileData = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(fileData);
};

// 데이터 저장하기
export const writeData = (data: any) => {
  const stringifiedData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataPath, stringifiedData, 'utf8');
};
