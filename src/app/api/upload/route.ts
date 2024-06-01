import { IdPrefixes } from "@/constants";
import { File } from "@/types/file";
import { generateRandomId } from "@/utils/random";
import { put } from "@vercel/blob";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  const isPrivate = searchParams.get("isPrivate");

  const blob = await put(filename!, request.body!, {
    access: "public",
  });

  console.log(`Uploaded file: ${filename} to blob`);

  const id = generateRandomId(
    (isPrivate=="true") ? IdPrefixes.PRIVATE_FILE : IdPrefixes.PUBLIC_FILE
  );

  const file: File = {
    id,
    createdAt: new Date(),
    title: filename!,
    url: blob.url,
    downloadUrl: blob.downloadUrl,
    type: blob.contentType
  };

  await kv.set(id, file);

  console.log(`Uploaded file: ${filename} to kv`);

  revalidatePath("/", "layout");

  return NextResponse.json(file);
}
