import { Scissors } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 py-4 px-6 ">
      <div className="container mx-auto">
        <Link href="/" className="w-min flex items-center space-x-2">
          <Scissors className="h-6 w-6 text-purple-400" />
          <span className="text-xl font-bold text-gray-100">LinkPro</span>
        </Link>
      </div>
    </header>
  );
}
