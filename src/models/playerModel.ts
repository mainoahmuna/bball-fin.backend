export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  createdAt: Date;
}

export type NewPlayer = Omit<Player, 'id' | 'createdAt'>;