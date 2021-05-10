import express from 'express';

const router = express.Router();

router
  .route('/')
  .get((req, res) => res.json({ message: 'Hello World from BFF' }))
  .post((req, res) => res.json({ message: 'New Post Created' }));

export default router;
