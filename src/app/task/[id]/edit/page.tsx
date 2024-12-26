import Form from '@/app/ui/task/edit-form';
import Breadcrumbs from '@/app/ui/task/breadcrumbs';
import { fetchTaskById, fetchTasks } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Edit Task',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [task, tasks] = await Promise.all([fetchTaskById(id), fetchTasks()]);
    if (!task) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Task', href: '/task/list' },
                    {
                        label: 'Edit Task',
                        href: `/task/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form task={task} tasks= {tasks} />
        </main>
    );
}