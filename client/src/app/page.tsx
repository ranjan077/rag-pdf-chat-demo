import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link
        href="/chat"
        className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        Open chat
      </Link>
    </div>
  );
}
