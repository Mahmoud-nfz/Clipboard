import Link from "next/link";
import { kv } from "@vercel/kv";
import { Note } from "@/types/note";
import { notFound } from "next/navigation";

const NoteCard = async ({ id }: { id: string }) => {
  const note: Note | null = await kv.get(id);

  if (!note) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">{note.title}</h1>

      <div className="p-4 bg-gray-100 rounded-lg my-2 whitespace-pre">
        <h2 className="text-lg font-bold">{note.title}</h2>
        <p className="text-gray-500 text-sm">
          {note.createdAt.toLocaleString()}
        </p>
        <p className="text-gray-700">{note.content}</p>
      </div>
    </div>
  );
};

export default NoteCard;
