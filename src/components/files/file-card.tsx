import Link from "next/link";
import { kv } from "@vercel/kv";
import { notFound } from "next/navigation";
import { deleteFile } from "@/server/files/delete";
import { File } from "@/types/file";
import FilePreview from "./file-preview";

const FileCard = async ({ id }: { id: string }) => {
  const file: File | null = await kv.get(id);

  const deleteFileAction = deleteFile.bind(null, id);

  if (!file) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">{file.title}</h1>

      <div className="p-4 bg-gray-100 rounded-lg my-2 whitespace-pre">
        <h2 className="text-lg font-bold">{file.title}</h2>
        <p className="text-gray-500 text-sm">ID: {file.id}</p>
        <p className="text-gray-500 text-sm">
          {file.createdAt.toLocaleString()}
        </p>
        <h3 className="text-xl font-bold">Preview:</h3>
        <div className="p-4">
          <FilePreview file={file} />
        </div>
        <Link
          href={file.downloadUrl}
          className="bg-[#00BBF9] text-white mt-5 rounded-lg px-4 py-2 mx-4"
        >
          Click here to download this file
        </Link>
      </div>

      <form className="flex flex-col" action={deleteFileAction}>
        <button className="text-red-500">Click here to delete this file</button>
      </form>
    </div>
  );
};

export default FileCard;
