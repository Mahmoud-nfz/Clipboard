"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const MainActions = () => {
  const [noteId, setNoteId] = useState("");
  const router = useRouter();

  const handleGoClick = () => {
    if (noteId.trim()) {
      router.push(`/${noteId}`);
    }
  };

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      handleGoClick();
    }
  };

  return (
    <div className="my-4">
      <div>
        <Link href="/create" className="rounded-xl bg-yellow-300 p-2 px-3">
          + Create a new note
        </Link>
      </div>
      <div className="mt-4 space-x-1">
        <input
          type="text"
          className="rounded-xl p-2 px-3 border-gray-300 border-2"
          placeholder="Enter a note ID to see it..."
          value={noteId}
          onChange={(e) => setNoteId(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="rounded-xl bg-yellow-300 p-2 px-3"
          onClick={handleGoClick}
        >
          Go
        </button>
      </div>
    </div>
  );
};
