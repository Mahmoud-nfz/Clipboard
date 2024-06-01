"use server";

import { kv } from "@vercel/kv";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { File } from "@/types/file";

export const deleteFile = async (id: string, formData: FormData) => {
  if (!id) {
    return {
      errors: {
        id: "ID is required",
      },
    };
  }
  console.log(`Deleting file with ID: ${id}`);

  const file = await kv.get(id) as File;

  if (!file) {
    return {
      errors: {
        id: "File not found",
      },
    };
  }

  await del(file.url);

  await kv.del(id);

  revalidatePath("/", "layout");

  return {
    message: "File deleted successfully",
  };
};
