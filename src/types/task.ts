export interface Task {
    id: string;
    name: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    date: string;
    status: "Pending" | "Completed";
}
