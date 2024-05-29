"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text: string;
}

export function SubmitButton({text}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#00BBF9] text-white p-2 rounded-lg disabled:bg-gray-300"
    >
      {text}
    </button>
  );
}
