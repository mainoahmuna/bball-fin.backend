import { prisma } from '../db';

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  createdAt: Date;
}

export type NewPlayer = Omit<Player, 'id' | 'createdAt'>;

export const addPlayer = async (data: NewPlayer): Promise<Player> => {
  const player = await prisma.player.create({
    data: {
      ...data,
    },
  });
  return player;
};

export const getAllPlayers = async (): Promise<Player[]> => {
 return await prisma.player.findMany();
};