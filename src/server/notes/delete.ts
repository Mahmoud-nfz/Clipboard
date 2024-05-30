"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export const deleteNote = async (id: string, formData: FormData) => {
  if (!id) {
    return {
      errors: {
        id: "ID is required",
      },
    };
  }
  console.log(`Deleting note with ID: ${id}`);

  await kv.del(id);

  revalidatePath("/", "layout");

  return {
    message: "Note deleted successfully",
  };
};
