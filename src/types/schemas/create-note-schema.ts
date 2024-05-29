import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string().max(100),
  content: z.string().min(1),
});
