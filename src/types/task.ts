export interface Task {
    id: string;
    name: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    dueDate: string;
    completed: boolean;
}
