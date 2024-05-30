import Link from "next/link";
import { kv } from "@vercel/kv";
import { Note } from "@/types/note";
import { notFound } from "next/navigation";
import { deleteNote } from "@/server/notes/delete";

const NoteCard = async ({ id }: { id: string }) => {
  const note: Note | null = await kv.get(id);

  const deleteNoteAction = deleteNote.bind(null, id);

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

      <form className="flex flex-col" action={deleteNoteAction}>
        <button className="text-red-500">Click here to delete this note</button>
      </form>
    </div>
  );
};

export default NoteCard;
