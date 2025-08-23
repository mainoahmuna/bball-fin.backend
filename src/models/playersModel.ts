import { v4 as uuidv4 } from 'uuid';

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
}

export type NewPlayer = Omit<Player, 'id'>;

const players: Player[] = [];

export const addPlayer = (data: NewPlayer): Player => {
  const player: Player = { id: uuidv4(), ...data };
  players.push(player);
  return player;
};

export const getAllPlayers = (): Player[] => {
  return players;
};