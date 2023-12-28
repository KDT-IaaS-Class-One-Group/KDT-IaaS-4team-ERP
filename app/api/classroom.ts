import { NextApiRequest, NextApiResponse } from 'next';
import { ClassroomManager } from '../utils/classroomManager';
import data from '../databases/classroom.json'; // 데이터 파일 불러오기

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const manager = new ClassroomManager(data);

  // 예시: 특정 강의실 조회
  const room301 = manager.getClassroom('room_301');

  res.status(200).json(room301);
}
