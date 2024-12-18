"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function deleteTask(id: string) {
    await sql`DELETE FROM tasks WHERE id = ${id}`;
    revalidatePath("/task/list");
}