'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addTask } from '../data';

export default function AddTaskPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            setError('Both title and description are required.');
            return;
        }

        addTask(title, description);
        router.push('/task/list'); // Redirect to task list after adding
    };

    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-6 max-w-3xl text-center bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg shadow-lg">
                <div className="container mx-auto p-6 max-w-lg">
                    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                        Add New Task 📝
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200"
                    >
                        {error && (
                            <p className="text-red-600 font-medium mb-4 text-center">
                                {error}
                            </p>
                        )}
                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Task Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition duration-150"
                                placeholder="Enter task title"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition duration-150"
                                placeholder="Enter task description"
                                rows={5}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150"
                        >
                            Add Task
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
