import { z } from 'zod';

export const playerSchema = z.object({
  name: z.string().min(1),
  team: z.string().min(1),
  position: z.string().min(1)
});