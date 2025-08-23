import { Request, Response } from 'express';
import { addPlayer, getAllPlayers } from '../models/playersModel';

export const createPlayer = (req: Request, res: Response): void => {
  const { name, team, position } = req.body ?? {};
  if (!name || !team || !position) {
    res.status(400).json({ error: 'Missing required fields: name, team, position' });
    return;
  }

  const newPlayer = addPlayer({ name, team, position });
  res.status(201).json(newPlayer);
};

export const getPlayers = (_req: Request, res: Response): void => {
  res.status(200).json(getAllPlayers());
};