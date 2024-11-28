import TaskList from "@/app/task/TaskList";
// import Link from 'next/link';
import '@/app/styles/globals.css';

export default function Home() {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Task Manager App 📝
      </h1>
      <TaskList />
    </div>
  );
}
