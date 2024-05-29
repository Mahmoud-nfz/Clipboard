"use server";

import { createNoteSchema } from "@/types/schemas/create-note-schema";

export const createNote = async (prevState: any, formData: FormData) => {
  const validatedFields = createNoteSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, content } = validatedFields.data;

  await new Promise((resolve) => setTimeout(resolve, 300));

  console.log(`Creating note with title: ${title} and content: ${content}`);
  return {
    message: "Note created successfully",
    data: {
      id: 1,
      title,
      content,
      createdAt: new Date(),
    },
  };
};
