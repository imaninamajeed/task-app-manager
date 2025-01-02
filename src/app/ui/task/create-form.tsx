'use client';

import { TaskField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
    CheckIcon,
    ClockIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTask, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form({ tasks }: { tasks: TaskField[] }) {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createTask, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Task ID */}
                <div className="mb-4">
                    <label htmlFor="taskId" className="mb-2 block text-sm font-medium">
                        Task ID
                    </label>
                    <input
                        id="taskId"
                        name="taskId"
                        type="text"
                        value={tasks.length ? (parseInt(tasks[tasks.length - 1].id) + 1).toString() : "1"}
                        readOnly
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500 bg-gray-100 cursor-not-allowed"
                    />
                    <div id="taskId-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.taskId &&
                            state.errors.taskId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Task Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Set Task Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter task title"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="title-error"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.title &&
                            state.errors.title.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Task Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Set Task Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter task description"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="description-error"
                    />
                    <div id="description-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.description &&
                            state.errors.description.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Task Priority */}
                <div className="mb-4">
                    <label htmlFor="priority" className="mb-2 block text-sm font-medium">
                        Set Task Priority
                    </label>
                    <div className="relative">
                        <select
                            id="priority"
                            name="priority"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="priority-error"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select task priority
                            </option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <div id="priority-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.priority &&
                            state.errors.priority.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    priority error  {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Task Status */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Set Task Status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="pending"
                                    name="status"
                                    type="radio"
                                    value="Pending"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 focus:ring-2"
                                />
                                <label
                                    htmlFor="pending"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Pending <ClockIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="completed"
                                    name="status"
                                    type="radio"
                                    value="Completed"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="completed"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Completed <CheckIcon className="h-4 w-4" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.status &&
                            state.errors.status.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    status{error}
                                </p>
                            ))}
                    </div>
                </fieldset>

                <div aria-live="polite" aria-atomic="true">
                    {state.message ? (
                        <p className="mt-2 text-sm text-red-500">{state.message}</p>
                    ) : null}
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/task/list"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Task</Button>
            </div>
        </form>
    );
}