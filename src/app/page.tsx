import Navbar from "@/components/general/navbar";
import NotesList from "@/components/notes/notes-list";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Welcome to Clipboard!</h1>
        <p className="mt-2 leading-4 text-gray-700">
          This is a simple tool to share your notes with ease.
          <br />
          Start by creating a new note by clicking the button below or by
          browsing a note by entering its ID.
        </p>

        <div className="mt-4">
          <button className="rounded-xl bg-yellow-300 p-2 px-3">
            + Create a new note
          </button>
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="rounded-xl p-2 px-3 border-gray-300 border-2"
            placeholder="Enter a note ID to see it..."
          />
          <button className="rounded-xl bg-yellow-300 p-2 px-3">Go</button>
        </div>
        <div className="mt-5"></div>

        <NotesList/>
      </main>
    </div>
  );
}
