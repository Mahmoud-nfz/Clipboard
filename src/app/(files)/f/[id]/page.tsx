import { MainActions } from "@/components/notes/main-actions";
import FileCard from "@/components/files/file-card";

export default function NoteScreen({ params }: { params: { id: string } }) {
  return (
    <main className="p-8 pt-0">
      <MainActions />

      <h4 className="text-md text-gray-500 font-bold mt-5">
        Currently viewing file:
      </h4>

      <FileCard id={params.id} />
    </main>
  );
}
