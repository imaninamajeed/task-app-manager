import { UpdateTask, DeleteTask, ViewTask } from '@/app/ui/task/buttons';
import TaskStatus from '@/app/ui/task/status';
import TaskPriority from '@/app/ui/task/priority';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredTasks } from '@/app/lib/data';

export default async function TasksTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const tasks = await fetchFilteredTasks(query, currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block max-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className='md:hidden'>
                        {tasks?.map((task) => (
                            <div
                                key={task.id}
                                className="mb-4 w-full rounded-lg bg-white p-6 shadow-md transition-transform transform hover:scale-105"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p className="text-lg font-semibold">{task.title}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{task.description}</p>
                                    </div>
                                    <TaskStatus status={task.status} />
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <TaskPriority priority={task.priority} />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <ViewTask id={task.id} />
                                        <UpdateTask id={task.id} />
                                        <DeleteTask id={task.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        ID
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Description
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Priority
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Due Date
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {tasks?.map((task) => (
                                    <tr
                                        key={task.id}
                                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            {task.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {task.title}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3 text-left" title={task.description}>
                                            {task.description.length > 10 ? `${task.description.substring(0, 30)}...` : task.description}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            <TaskPriority priority={task.priority} />
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-3">
                                            {formatDateToLocal(task.date)}
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-3">
                                            <TaskStatus status={task.status} />
                                        </td>

                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex justify-end gap-3">
                                                <ViewTask id={task.id} />
                                                <UpdateTask id={task.id} />
                                                <DeleteTask id={task.id} />
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}