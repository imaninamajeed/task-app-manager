import { fetchTasks } from '@/app/lib/data';
import Form from '@/app/ui/task/create-form';
import Breadcrumbs from '@/app/ui/task/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Task',
};

export default async function Page() {
    const tasks = await fetchTasks();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Tasks', href: '/task' },
                    {
                        label: 'Create Task',
                        href: '/task/create',
                        active: true,
                    },
                ]}
            />
            <Form tasks={tasks} />
        </main>
    );
}