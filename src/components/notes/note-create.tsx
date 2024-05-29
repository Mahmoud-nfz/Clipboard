import { createNote } from "@/server/notes/create";

const NoteCreate = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg h-full">
      {/* form to create note */}
      <form className="flex flex-col space-y-3" action={createNote}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Content"
          name="content"
          className="p-2 border border-gray-300 rounded-lg h-60"
        />
        <button
          type="submit"
          className="bg-[#00BBF9] text-white p-2 rounded-lg"
        >
          Create Note
        </button>
      </form>
    </div>
  );
};

export default NoteCreate;
