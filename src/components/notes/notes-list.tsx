import Link from "next/link";

const notes = [
  {
    id: 1,
    title: "My first note",
    content: "This is my first note. I'm so excited to use Clipboard!",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "My second note",
    content: "This is my second note. I'm so excited to use Clipboard!",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "My third note",
    content: "This is my third note. I'm so excited to use Clipboard!",
    createdAt: new Date(),
  },
];

const NotesList = () => {
  return (
    <div className="flex flex-col">
      {notes.map((note) => (
        <Link href={`/notes/${note.id}`} key={note.id}>
          <div className="p-4 bg-gray-100 rounded-lg my-2 cursor-pointer">
            <h2 className="text-lg font-bold">{note.title}</h2>
            <p className="text-gray-700">{note.content}</p>
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
