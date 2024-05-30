"use server";

import { kv } from "@vercel/kv";
import { createNoteSchema } from "@/types/schemas/create-note-schema";
import { generateRandomId } from "@/utils/random";
import { revalidatePath } from "next/cache";

export const createNote = async (prevState: any, formData: FormData) => {
  const validatedFields = createNoteSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    isPrivate: formData.get("isPrivate"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, content, isPrivate } = validatedFields.data;

  console.log(`Creating note with title: ${title} and content: ${content}`);

  const id = generateRandomId(isPrivate ?? false);

  const note = {
    id,
    title,
    content,
    createdAt: new Date(),
  };

  await kv.set(id, note);

  revalidatePath("/", "page");

  return {
    message: "Note created successfully",
    data: note,
  };
};
