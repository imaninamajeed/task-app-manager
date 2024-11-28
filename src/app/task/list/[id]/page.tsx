import Link from 'next/link';
import { tasks } from '../../data';

interface TaskDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
    const { id } = await params;
    const task = tasks.find((task) => task.id === parseInt(id, 10)) || null;

    if (!task) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Task Not Found</h1>
                <p className="text-gray-600 mb-6">The task you are looking for does not exist.</p>
                <Link href="/task/list" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Back to Task List
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-6 max-w-3xl text-center bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg shadow-lg">
                <div className="container mx-auto p-6 max-w-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">{task.title} 🔍</h1>
                    <p className="text-lg text-gray-600 mb-6">{task.description}</p>
                    <div className="text-center">
                        <Link href="/task/list" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
                            Back to Task List
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
