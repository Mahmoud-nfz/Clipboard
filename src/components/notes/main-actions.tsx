export const MainActions = () => {
  return (
    <div className="my-4">
      <div>
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
    </div>
  );
};
