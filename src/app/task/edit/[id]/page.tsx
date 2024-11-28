'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { tasks } from '../../data';

export default function EditTaskPage() {
    const router = useRouter();
    const { id } = useParams();  // Get the task ID from the URL
    const taskId = id ? parseInt(id as string) : null;
    const task = tasks.find((task) => task.id === taskId);

    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

    if (!task) {
        return <p className="text-center text-red-600">Task not found</p>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title?.trim() || !description?.trim()) {
            setError('Both title and description are required.');
            return;
        }

        // Update the task in the tasks array
        task.title = title;
        task.description = description;

        // Redirect back to the task list after editing
        router.push('/task/list');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-6 max-w-3xl text-center bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg shadow-lg">
                <div className="container mx-auto p-6 max-w-lg">
                    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                        Edit Task ✏️
                    </h1>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        {error && (
                            <p className="text-red-600 text-center font-semibold mb-6">{error}</p>
                        )}
                        <div className="mb-6">
                            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                                Task Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={title || ''}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150"
                                placeholder="Enter task title"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description || ''}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150"
                                placeholder="Enter task description"
                                rows={5}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
