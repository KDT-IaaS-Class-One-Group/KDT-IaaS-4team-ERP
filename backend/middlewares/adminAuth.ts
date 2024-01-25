import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Express의 Request 인터페이스 확장
declare global {
  namespace Express {
    interface Request {
      user?: any; // 또는 더 구체적인 타입 사용
    }
  }
}

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send('인증 토큰이 없습니다.');
  }

  try {
    const decoded = jwt.verify(token, 'YourSecretKey');
    req.user = decoded; // 이제 'user' 속성을 사용할 수 있습니다
    next();
  } catch (error) {
    res.status(401).send('유효하지 않은 토큰입니다.');
  }
};
