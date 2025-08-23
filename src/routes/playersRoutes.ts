import { Router } from 'express';
import { createPlayer, getPlayers } from '../controllers/playersController';

const router = Router();

router.get('/', getPlayers);
router.post('/', createPlayer);

export default router;