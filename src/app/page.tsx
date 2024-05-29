import { MainActions } from "@/components/notes/main-actions";
import NotesList from "@/components/notes/notes-list";

export default function Home() {
  return (
    <main className="p-8 pt-4">
      <h1 className="text-4xl font-bold">Welcome to Clipboard!</h1>
      <p className="mt-2 leading-4 text-gray-700">
        This is a simple tool to share your notes with ease.
        <br />
        Start by creating a new note by clicking the button below or by browsing
        a note by entering its ID.
      </p>

      <MainActions />

      <h4 className="text-xl font-bold">Latest notes:</h4>
      <NotesList />
    </main>
  );
}
