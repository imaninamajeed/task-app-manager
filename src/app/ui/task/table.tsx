// import {
//     UpdateInvoice,
//     DeleteInvoice,
//     ViewInvoice,
// } from "@/app/ui/task/buttons";

import { UpdateTask, DeleteTask, ViewTask } from '@/app/ui/task/buttons';
import TaskStatus from '@/app/ui/task/status';
import TaskPriority from '@/app/ui/task/priority';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredTasks } from '@/app/lib/data';

// export default async function InvoicesTable({
//     query,
//     currentPage,
// }: {
//     query: string;
//     currentPage: number;
// }) {
//     const tasks = await fetchFilteredTasks(query, currentPage);

//     return (
//         <div className="mt-6 flow-root">
//             <div className="inline-block min-w-full align-middle">
//                 <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//                     <div className="md:hidden">
//                         {tasks?.map((task) => (
//                             <div
//                                 key={task.id}
//                                 className="mb-2 w-full rounded-md bg-white p-4">
//                                 <div className="flex items-center justify-between border-b pb-4">
//                                     <div>
//                                         <div className="mb-2 flex items-center">
//                                             <p>{task.id}</p>
//                                         </div>
//                                         <p className="text-sm text-gray-500">{task.title}</p>
//                                     </div>
//                                     {/* <InvoiceStatus status={task.priority} /> */}
//                                 </div>
//                                 <div className="flex w-full items-center justify-between pt-4">
//                                     <div>
//                                         {/* <p className="text-xl font-medium">
//                                             {formatCurrency(task.amount)}
//                                         </p>
//                                         <p>{formatDateToLocal(task.date)}</p> */}
//                                     </div>
//                                     <div className="flex justify-end gap-2">
//                                         <UpdateInvoice id={task.id} />
//                                         <DeleteInvoice id={task.id} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <table className="hidden min-w-full text-gray-900 md:table">
//                         <thead className="rounded-lg text-left text-sm font-normal">
//                             <tr>
//                                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                                     Task ID
//                                 </th>
//                                 <th scope="col" className="px-3 py-5 font-medium">
//                                     Task Title
//                                 </th>
//                                 <th scope="col" className="px-3 py-5 font-medium">
//                                     Amount
//                                 </th>
//                                 <th scope="col" className="px-3 py-5 font-medium">
//                                     Description
//                                 </th>
//                                 <th scope="col" className="px-3 py-5 font-medium">
//                                     Priority
//                                 </th>
//                                 <th scope="col" className="px-3 py-5 font-medium">
//                                     Due Date
//                                 </th>
//                                 <th scope="col" className="px-3 py-5 font-medium">
//                                     Completed
//                                 </th>
//                                 <th scope="col" className="relative py-3 pl-6 pr-3">
//                                     <span className="sr-only">Action</span>
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white">
//                             {tasks?.map((task) => (
//                                 <tr
//                                     key={task.id}
//                                     className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
//                                     <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                                         <div className="flex items-center gap-3">
//                                             <p>{task.id}</p>
//                                         </div>
//                                     </td>
//                                     <td className="whitespace-nowrap px-3 py-3">
//                                         {task.title}
//                                     </td>
//                                     <td className="whitespace-nowrap px-3 py-3">
//                                         {(task.description)}
//                                     </td>
//                                     <td className="whitespace-nowrap px-3 py-3">
//                                         {formatDateToLocal(task.duedate)}
//                                     </td>
//                                     <td className="whitespace-nowrap px-3 py-3">
//                                         <InvoiceStatus status={task.priority} />
//                                     </td>
//                                     <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                                         <div className="flex justify-end gap-3">
//                                             <ViewInvoice id={task.id} />
//                                             <UpdateInvoice id={task.id} />
//                                             <DeleteInvoice id={task.id} />
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default async function TasksTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const tasks = await fetchFilteredTasks(query, currentPage);

    return (
        <div className="mt-6 flow-root overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="min-w-full text-gray-900">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Task ID
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Task Title
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
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {tasks?.map((task) => (
                                <tr
                                    key={task.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex items-center gap-3 text-right">
                                            <p>{task.id}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {task.title}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3 text-justify">
                                        {(task.description)}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {formatDateToLocal(task.duedate)}
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-3">
                                        <TaskPriority priority={task.priority} />
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-3">
                                        <TaskStatus status={task.completed} />
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
    );
}