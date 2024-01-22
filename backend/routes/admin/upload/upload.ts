import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  res.status(200).send('File uploaded successfully.');
});

export default router;
