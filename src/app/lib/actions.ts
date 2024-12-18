"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function deleteTask(id: string) {
    try {
        await sql`DELETE FROM tasks WHERE id = ${id}`;
        revalidatePath("/dashboard/tasks");
        return { message: "Deleted Task." };
    } catch (error) {
        return { message: "Database Error: Failed to Delete Task." };
    }
}