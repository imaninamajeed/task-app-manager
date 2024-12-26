export type Task = {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    date: string;
    status: boolean;
}

export type TasksTable = {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    date: string;
    status: boolean;
}

export type TaskField = {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    date: string;
    status: boolean;
};


export type TaskForm = {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    date: string;
    status: boolean;
}