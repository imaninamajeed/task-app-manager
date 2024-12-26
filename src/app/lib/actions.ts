"use server";

import { z } from 'zod';
import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
    id: z.string(),
    taskId: z.string({
        invalid_type_error: 'Please select a task.',
    }),
    title: z.string({
        invalid_type_error: 'Please enter a title.',
    }),
    description: z.string({
        invalid_type_error: 'Please enter a description.',
    }),
    priority: z.enum(['High', 'Medium', 'Low'], {
        invalid_type_error: 'Please select a priority.',
    }),
    date: z.string(),
    status: z.boolean(),
});

const CreateTask = FormSchema.omit({ id: true, date: true });

export type State = {
    errors?: {
        taskId?: string[];
        title?: string[];
        description?: string[];
        priority?: string[];
        status?: string[];
    };
    message?: string | null;
};

export async function createTask(prevState: State, formData: FormData) {

    // Validate form fields using Zod
    const validatedFields = CreateTask.safeParse({
        taskId: formData.get('taskId'),
        title: formData.get('title'),
        description: formData.get('description'),
        priority: formData.get('priority'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Task.',
        };
    }

    // Prepare data for insertion into the database
    const { taskId, title, description, priority, status } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];

    // Insert data into the database
    try {
        await sql`
            INSERT INTO tasks (task_id, title, description, priority, date, status)
            VALUES ( ${taskId},  ${title}, ${description}, ${priority}, ${date}, ${status})
        `;
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Create Task.',
        };
    }

    revalidatePath('/task/list');
    redirect('/task/list');
}

export async function deleteTask(id: string) {
    try {
        await sql`DELETE FROM tasks WHERE id = ${id} `;
        revalidatePath("/task/list");
        return { message: 'Task Deleted Successfully.' };
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Delete Task.',
        };
    }
}

const UpdateTask = FormSchema.omit({ id: true, date: true });
export async function updateTask(id: string, prevState: State, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = UpdateTask.safeParse({
        id: formData.get('id'),
        title: formData.get('title'),
        description: formData.get('description'),
        priority: formData.get('priority'),
        date: formData.get('date'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Task.',
        };
    }

    // Prepare data for insertion into the database
    const { title, description, priority, status } = validatedFields.data;

    // Insert data into the database
    try {
        await sql`
            UPDATE tasks
            SET title = ${title}, description = ${description}, priority = ${priority}, status = ${status}
            WHERE id = ${id}
        `;
    }
    catch (error) {
        return {
            message: 'Database Error: Failed to Update Task.',
        };
    }

    revalidatePath('/task/list');
    redirect('/task/list');
}

