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
      <div className="flex flex-wrap">
        <Link href="/create" className="rounded-xl bg-yellow-300 p-2 px-3 m-1">
          + Create a new note
        </Link>
        <Link href="/upload" className="rounded-xl bg-pink-300 p-2 px-3 m-1">
          + Upload a file
        </Link>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="rounded-xl p-2 px-3 border-gray-300 border-2 mr-1 mb-2"
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
