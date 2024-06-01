"use client";
// components/FileUpload.tsx
import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { SubmitButton } from "../forms/submit-button";

const FileUpload = () => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles(newFiles);
    inputFileRef.current!.files = event.dataTransfer.files;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles(newFiles);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputFileRef.current?.files?.length) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const newFile = await response.json();
    router.push(`/f/${newFile.id}`);
  };

  return (
    <div className="flex flex-col w-full bg-gray-100 p-4 rounded-lg h-full mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div
          className="cursor-pointer bg-gray-100 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span className="text-gray-600">Drag and drop your files here</span>
            <span className="text-gray-500 text-sm">(or click to select)</span>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              ref={inputFileRef}
              multiple
              required
            />
          </label>
        </div>
        <div className="mt-6 text-center">
          {files.map((file) => (
            <div key={file.name}>{`${file.name} (${(file.size / 1024).toFixed(
              2
            )} KB)`}</div>
          ))}
        </div>
        <SubmitButton text="Upload File" />
      </form>
    </div>
  );
};

export default FileUpload;
