import Link from 'next/link';
import { tasks } from '../data';

export default function TaskListPage() {
    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-6 max-w-3xl text-center bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg shadow-lg">
                <div className="container mx-auto p-6 max-w-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Task List 📋</h1>
                    <ul className="space-y-4">
                        {tasks.map((task) => (
                            <li key={task.id} className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                                <Link href={`/task/list/${task.id}`}
                                    className="text-xl font-semibold text-red-600 hover:underline">{task.title}
                                </Link>
                                <p className="text-gray-600 mt-2">{task.description}</p>
                                <div className="mt-2">
                                    <Link
                                        href={`/task/edit/${task.id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 text-center">
                        <Link href="/task/create"
                            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
                            Add New Task
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
