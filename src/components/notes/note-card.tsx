import Link from "next/link";
import { Note } from "@/types/note";

const note: Note = {
  id: 1,
  title: "My first note",
  content: "This is my first note. I'm so excited to use Clipboard!",
  createdAt: new Date(),
};

const NoteCard = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">{note.title}</h1>

      <Link href={`/notes/${note.id}`} key={note.id}>
        <div className="p-4 bg-gray-100 rounded-lg my-2 cursor-pointer whitespace-pre">
          <h2 className="text-lg font-bold">{note.title}</h2>
          <p className="text-gray-500 text-sm">
            {note.createdAt.toLocaleString()}
          </p>
          <p className="text-gray-700">{note.content}</p>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
