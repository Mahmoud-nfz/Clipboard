import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center">
      <div className="logo font-bold text-lg">
        <Link href="/" className="flex items-center space-x-3 text-[#00BBF9]">
          <Image
            src={"/clipboard.png"}
            width={50}
            height={50}
            alt={"Logo"}
          ></Image>
          <span>Clipboard</span>
        </Link>
      </div>
      <div className="space-x-3">
        <Link href="/">List</Link>
        <Link href="/about">About</Link>
        <Link href="/create" className="rounded-xl bg-yellow-300 p-2 px-3">+ Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
