import { Request, Response, NextFunction } from 'express';
import { addPlayer, getAllPlayers, getPlayerById, updatePlayerById, deletePlayerById } from '../services/playerService';
import { playerSchema } from '../validation/playerValidation';

export const createPlayer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, team, position } = req.body ?? {};
    const parsed = playerSchema.safeParse(req.body);
    if (!parsed.success) {
      const err = new Error('Validation error');
      (err as any).status = 400;
      (err as any).details = parsed.error.issues.map(issue => issue.message);
      return next(err);
    }
    const newPlayer = await addPlayer({ name, team, position });
    res.status(201).json(newPlayer);
  } catch (error) {
    next(error);
  }
};

export const getPlayers = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json(await getAllPlayers());
  } catch (error) {
    next(error);
  }
};

export const getPlayer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const player = await getPlayerById(id);
    if (!player) {
      const err = new Error('Player not found');
      (err as any).status = 404;
      return next(err);
    }
    res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

export const updatePlayer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const parsed = playerSchema.partial().safeParse(req.body);
    if (!parsed.success) {
      const err = new Error('Validation error');
      (err as any).status = 400;
      (err as any).details = parsed.error.issues.map(issue => issue.message);
      return next(err);
    }
    const updated = await updatePlayerById(id, req.body);
    if (!updated) {
      const err = new Error('Player not found');
      (err as any).status = 404;
      return next(err);
    }
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deletePlayer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await deletePlayerById(id);
    if (!deleted) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    res.status(200).json({ message: 'Player deleted', id });
  } catch (error) {
    next(error);
  }
};