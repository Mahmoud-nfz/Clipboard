import Link from "next/link";

export const MainActions = () => {
  return (
    <div className="my-4">
      <div>
        <Link href={"/create"} className="rounded-xl bg-yellow-300 p-2 px-3">
          + Create a new note
        </Link>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="rounded-xl p-2 px-3 border-gray-300 border-2"
          placeholder="Enter a note ID to see it..."
        />
        <button className="rounded-xl bg-yellow-300 p-2 px-3">Go</button>
      </div>
    </div>
  );
};
