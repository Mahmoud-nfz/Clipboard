"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { File } from "@/types/file";

const FileUpload = () => {
  const router = useRouter();
  const inputFileRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/api/upload?filename=${file.name}&isPrivate=${event.currentTarget.isPrivate.checked}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as File;

          router.push(`/f/${newBlob.id}`);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>

        <label className="flex items-center space-x-2 cursor-pointer my-2">
          <input type="checkbox" name="isPrivate" />
          <span>Private</span>
        </label>
      </form>
    </>
  );
};

export default FileUpload;
