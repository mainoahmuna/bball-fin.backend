import { Request, Response } from 'express';
import { addPlayer, getAllPlayers } from '../services/playerService';
import { playerSchema } from '../validation/player';

export const createPlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, team, position } = req.body ?? {};
    const parsed = playerSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues.map(issue => issue.message) });
      return;
    }

    const newPlayer = await addPlayer({ name, team, position });
    res.status(201).json(newPlayer);

  } catch (error) {
    res.status(500).json({ error: 'Internal server error'})
  }
};

export const getPlayers = async (_req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json( await getAllPlayers() );
  } catch (error) {
    res.status(500).json({ error: 'Internal server error'})
  }
};