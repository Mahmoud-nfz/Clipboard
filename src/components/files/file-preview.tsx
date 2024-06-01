import Image from "next/image";
import { File } from "@/types/file";

const FilePreview = ({ file }: { file: File }) => {
  if (file.type?.startsWith("image/")) {
    return (
      <Image
        src={file.url}
        alt={file.title}
        width={500}
        height={500}
        className="rounded-lg"
      />
    );
  }

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <p className="text-gray-500">No preview available</p>
    </div>
  );
};

export default FilePreview;
