import { Router } from 'express';
import { createPlayer, getPlayer, getPlayers, updatePlayer, deletePlayer } from '../controllers/playerController';

const playerRouter = Router();

playerRouter.get('/', getPlayers);           // GET /players → fetch all players
playerRouter.get('/:id', getPlayer);         // GET /players/:id → fetch single player by ID
playerRouter.post('/', createPlayer);        // POST /players → create a new player
playerRouter.put('/:id', updatePlayer);      // PUT /players/:id → update a player by ID
playerRouter.delete('/:id', deletePlayer);   // DELETE /players/:id → delete a player by ID

export default playerRouter;