import { MainActions } from "@/components/notes/main-actions";
import FileUpload from "@/components/files/file-upload";

export default function NoteScreen({ params }: { params: { id: string } }) {
  return (
    <main className="p-8 pt-0">
      <MainActions />

      <h4 className="text-2xl text-gray-500 font-bold mt-5">
        Upload a file
      </h4>

      <FileUpload />
    </main>
  );
}
