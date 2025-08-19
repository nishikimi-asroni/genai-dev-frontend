import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">AI 圧Q就活</h1>
      <Link href="/interview" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        面接開始
      </Link>
    </div>
  );
}
