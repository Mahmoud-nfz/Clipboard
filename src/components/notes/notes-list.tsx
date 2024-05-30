import { Note } from "@/types/note";
import { kv } from "@vercel/kv";
import Link from "next/link";

const NotesList = async () => {
  const keys = await kv.keys("p*");

  const notes: Note[] = await Promise.all(
    keys.map(async (key) => {
      const note = (await kv.get(key)) as Note;
      return note;
    })
  );

  return (
    <div className="flex flex-col">
      {notes.slice(0, 10).map((note) => (
        <Link href={`/${note.id}`} key={note.id}>
          <div className="p-4 bg-gray-100 rounded-lg my-2 cursor-pointer">
            <h2 className="text-lg font-bold">{note.title}</h2>
            <p className="text-gray-700">{note.content.slice(0,300)}</p>
            <p className="text-gray-500 text-sm">ID: {note.id}</p>
            <p className="text-gray-500 text-sm">
              {note.createdAt.toLocaleString()}
            </p>
            <h4 className="text-[#F15BB5] font-semibold">Read More {"->"}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NotesList;
