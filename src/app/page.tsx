import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto py-4">
      <div className="container mx-auto py-6 max-w-3xl text-center bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg shadow-lg">
        <div className="container mx-auto py-6 max-w-2xl">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome to Task Manager App 🗂️</h1>
          <p className="text-lg text-gray-600 mb-8">
            Streamline your workflow and manage your tasks efficiently.
          </p>
          <Link href="/task/list" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
            View Tasks
          </Link>
        </div>
      </div>
    </div>
  );
}
