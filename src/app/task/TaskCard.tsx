'use client';

import React from 'react';
import { Task } from '../../types/task';

interface TaskCardProps {
    task: Task;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onToggleComplete }) => {
    return (
        <div
            className={`p-4 border rounded-md mb-4 ${task.status ? 'bg-gray-200' : 'bg-white'}`}
        >
            <div className="flex justify-between items-center">
                <h2 className={`text-xl ${task.status ? 'line-through' : ''}`}>{task.name}</h2>
                <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
            </div>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Priority: {task.priority}</p>
            <p className="text-sm text-gray-500">Due Date: {task.date}</p>
            <div className="flex items-center mt-2">
                <input
                    type="checkbox"
                    checked={task.status}
                    onChange={() => onToggleComplete(task.id)}
                    className="mr-2"
                />
                <span className={task.status ? 'text-gray-500' : ''}>
                    {task.status ? 'status' : 'Incomplete'}
                </span>
            </div>
        </div>
    );
};

export default TaskCard;
