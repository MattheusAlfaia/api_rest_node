import { Router } from 'express';
import type { Request, Response } from 'express'; // Use "type" para imports de tipos

const router = Router();

router.get('/items', (req: Request, res: Response) => {
  res.json([{ id: 1, name: 'Item 1' }]);
});

// router.post('/items', (req: Request, res: Response) => {
//   res.json(req.body);
// });
router.post('/items', (req: Request, res: Response) => {
  const { name } = req.body;
  // if (!name) {
  //   return res.status(400).json({ error: 'Name is required' });
  // }
  res.status(201).json({ id: Math.random(), name });
});

export default router;
