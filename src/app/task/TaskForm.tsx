'use client'; // Indicates that this component should be rendered on the client-side

import React, { useState } from 'react';
import { Task } from '../../types/task';

interface TaskFormProps {
    onAddTask: (task: Task) => void;
    existingTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, existingTask }) => {
    const [name, setName] = useState(existingTask?.name || '');
    const [description, setDescription] = useState(existingTask?.description || '');
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>(existingTask?.priority || 'Medium');
    const [date, setdate] = useState(existingTask?.date || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: Math.random().toString(),
            name,
            description,
            priority,
            date,
            status: false,
        };
        onAddTask(newTask);
        setName('');
        setDescription('');
        setPriority('Medium');
        setdate('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
                {existingTask ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;
