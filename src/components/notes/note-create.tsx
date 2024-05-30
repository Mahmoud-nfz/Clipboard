"use client";

import { createNote } from "@/server/notes/create";
import { toast } from "react-hot-toast";
import { useFormState } from "react-dom";
import { SubmitButton } from "../forms/submit-button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
  data: {
    id: "",
    title: "",
    content: "",
    isPrivate: false,
    createdAt: new Date(),
  },
};

const NoteCreate = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(createNote, initialState);
  console.log(state);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      // navigate to the note page
      router.push(`/${state.data.id}`);
    }
    if (state?.errors) {
      toast.error(
        "An error occurred while creating the note. Check the form for errors."
      );
    }
  }, [state]);

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg h-full">
      {/* form to create note */}
      <form className="flex flex-col" action={formAction}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="p-2 border border-gray-300 rounded-lg mb-3"
        />
        <p className="text-red-500 font-semibold">
          {state?.errors?.title?.[0]}
        </p>
        <textarea
          placeholder="Content"
          name="content"
          className="p-2 border border-gray-300 rounded-lg h-60 mb-2"
        />
        <p className="text-red-500 font-semibold">
          {state?.errors?.content?.[0]}
        </p>
        <label className="flex items-center space-x-2 cursor-pointer mb-2">
          <input type="checkbox" name="isPrivate" />
          <span>Private</span>
        </label>
        <SubmitButton text="Create Note" />
      </form>
    </div>
  );
};

export default NoteCreate;
