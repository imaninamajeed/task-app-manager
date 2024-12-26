import { sql } from '@vercel/postgres';
import { Task } from './definitions';

const ITEMS_PER_PAGE = 6;
export async function fetchTaskPages() {
  try {
    const count = await sql`SELECT COUNT(*) FROM tasks`;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    console.log('totalPages', totalPages);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of tasks.');
  }
}

export async function fetchTaskById(id: string) {
  try {
    const data = await sql<Task>`SELECT * FROM tasks WHERE id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch task.');
  }
}

export async function fetchTasks() {
  try {
    const data = await sql<Task>`SELECT * FROM tasks`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tasks.');
  }
}

export async function fetchFilteredTasks(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const tasks = await sql<Task>`
      SELECT * FROM tasks
      WHERE
        title ILIKE ${`%${query}%`} OR
        description ILIKE ${`%${query}%`} OR
        priority ILIKE ${`%${query}%`} OR
        date::text ILIKE ${`%${query}%`} OR
        status::text ILIKE ${`%${query}%`}
      ORDER BY date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return tasks.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tasks.');
  }
}