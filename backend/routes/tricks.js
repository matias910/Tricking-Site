
import express from 'express';
import { getTricks, createTrick } from '../controllers/tricksController.js';

const router = express.Router();

router.get('/', getTricks);
router.post('/', createTrick);

export default router;
