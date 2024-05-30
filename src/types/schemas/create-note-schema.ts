import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string().max(100),
  content: z.string().min(1),
  isPrivate: z
    .string()
    .optional()
    .nullable()
    .transform((value) =>
      value === "on" ? true : value === null ? null : false
    ),
});
