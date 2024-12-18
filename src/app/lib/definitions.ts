export type Task = {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    duedate: string;
    completed: boolean;
}