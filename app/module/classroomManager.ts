// ClassroomManager.ts
import { Classrooms } from '../types/classroom';

export class ClassroomManager {
  private classrooms: Classrooms;

  constructor(classrooms: Classrooms) {
    this.classrooms = classrooms;
  }

  // 강의실 조회
  public getClassroom(roomId: string): Classroom | undefined {
    return this.classrooms[roomId];
  }

  // 강의실 추가
  public addClassroom(roomId: string, classroom: Classroom): void {
    this.classrooms[roomId] = classroom;
  }

  // 강의실 수정
  public updateClassroom(roomId: string, classroom: Classroom): void {
    if (this.classrooms[roomId]) {
      this.classrooms[roomId] = classroom;
    }
  }

  // 강의실 삭제
  public deleteClassroom(roomId: string): void {
    delete this.classrooms[roomId];
  }
}
