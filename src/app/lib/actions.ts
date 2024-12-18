"use server";
// import { z } from "zod";
import { sql } from "@vercel/postgres";
// import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// import { signIn } from "next-auth/react";
// import { AuthError } from "next-auth";

export async function deleteTask(id: string) {
    try {
        await sql`DELETE FROM tasks WHERE id = ${id}`;
        revalidatePath("/dashboard/tasks");
        return { message: "Deleted Task." };
    } catch (error) {
        return { message: "Database Error: Failed to Delete Task." };
    }
}

