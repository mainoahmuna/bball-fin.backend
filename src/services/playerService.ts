import { prisma } from "../db"
import { NewPlayer, Player } from "../models/playerModel";

export const addPlayer = async (data: NewPlayer): Promise<Player> => {
  const player = await prisma.player.create({
    data: {
      ...data,
    },
  });
  return player;
};

export const getAllPlayers = async (): Promise<Player[]> => {
  return await prisma.player.findMany() as Player[];
}

export const getPlayerById = async (id: string): Promise<Player | null> => {
  return await prisma.player.findUnique({ where: { id } });
};

export const updatePlayerById = async (id: string, data: Partial<NewPlayer>): Promise<Player | null> => {
  try {
    const updated = await prisma.player.update({
      where: { id },
      data,
    });
    return updated;
  } catch (e) {
    return null;
  }
};

export const deletePlayerById = async (id: string): Promise<boolean> => {
  try {
    await prisma.player.delete({ where: { id } });
    return true;
  } catch (e) {
    return false;
  }
};