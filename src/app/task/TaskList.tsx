'use client';

import React, { useState } from 'react';
import { Task } from '../../types/task';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

import { fetchTasks } from '../lib/data';

const TaskList: React.FC = async () => {
    const fetchTask = await fetchTasks();
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id: string) => {
        setTasks((prevTasks) => prevTasks.map(task =>
            task.id === id ? { ...task, status: !task.status } : task
        ));
    };

    return (
        <div>
            <TaskForm onAddTask={addTask} />
            <div className="mt-8">
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <TaskCard key={task.id} task={task} onDelete={deleteTask} onToggleComplete={toggleComplete} />
                    ))
                ) : (
                    <p>No tasks available.</p>
                )}
            </div>
        </div>
    );
};

export default TaskList;
