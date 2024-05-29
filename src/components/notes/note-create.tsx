"use client";

import { createNote } from "@/server/notes/create";
import { toast } from "react-hot-toast";
import { useFormState } from "react-dom";
import { SubmitButton } from "../forms/submit-button";
import { useEffect } from "react";

const initialState = {
  message: "",
  data: {
    id: 0,
    title: "",
    content: "",
    createdAt: new Date(),
  },
};

const NoteCreate = () => {
  const [state, formAction] = useFormState(createNote, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
    }
    if (state?.errors) {
        toast.error("An error occurred while creating the note. Check the form for errors.");       

    }
  }, [state]);

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg h-full">
      {/* form to create note */}
      <form className="flex flex-col space-y-3" action={formAction}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <p className="text-red-500 font-semibold">
          {state?.errors?.title?.[0]}
        </p>
        <textarea
          placeholder="Content"
          name="content"
          className="p-2 border border-gray-300 rounded-lg h-60"
        />
        <p className="text-red-500 font-semibold">
          {state?.errors?.content?.[0]}
        </p>
        <SubmitButton text="Create Note" />
      </form>
    </div>
  );
};

export default NoteCreate;
