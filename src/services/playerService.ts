import { prisma } from "../db"
import { NewPlayer, Player } from "../models/playersModel";

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