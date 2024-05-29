import { MainActions } from "@/components/notes/main-actions";
import NoteCard from "@/components/notes/note-card";

export default function NoteScreen({ params }: { params: { id: string } }) {
  return (
    <main className="p-8 pt-0">
      <MainActions />

      <h4 className="text-md text-gray-500 font-bold mt-5">
        Currently viewing note:
      </h4>

      <NoteCard id={params.id} />
    </main>
  );
}
