import React from "react";
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

  const parseContent = (content: string) => {
    // render links as links
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    const parts = content.split(urlRegex);

    const links = content.match(urlRegex);

    return (
      <p className="text-gray-700">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {links && links[index] && (
              <Link href={links[index]} className="text-blue-500 underline">
                {links[index]}
              </Link>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">{note.title}</h1>

      <div className="p-4 bg-gray-100 rounded-lg my-2 whitespace-pre">
        <h2 className="text-lg font-bold">{note.title}</h2>
        <p className="text-gray-500 text-sm">ID: {note.id}</p>
        <p className="text-gray-500 text-sm">
          {note.createdAt.toLocaleString()}
        </p>
        {parseContent(note.content)}
      </div>

      <form className="flex flex-col" action={deleteNoteAction}>
        <button className="text-red-500">Click here to delete this note</button>
      </form>
    </div>
  );
};

export default NoteCard;
