import { Request, Response } from 'express';
import { addPlayer, getAllPlayers } from '../models/playersModel';
import { playerSchema } from '../validation/player';

export const createPlayer = async (req: Request, res: Response): Promise<void> => {
  const { name, team, position } = req.body ?? {};
  const parsed = playerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  const newPlayer = await addPlayer({ name, team, position });
  res.status(201).json(newPlayer);
};

export const getPlayers = async (_req: Request, res: Response): Promise<void> => {
  res.status(200).json( await getAllPlayers() );
};