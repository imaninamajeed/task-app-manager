import Pagination from "@/app/ui/task/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/task/table";
import { CreateTask } from "@/app/ui/task/buttons";
import { TaskTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchTaskPages } from '@/app/lib/data';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tasks",
};

export default async function TaskListPage(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchTaskPages();

    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-6 max-w-5xl text-center bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg shadow-lg">
                <div className="container mx-auto p-6 max-w-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Task List 📋</h1>
                    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                        <Search placeholder="Search tasks..." />
                        <CreateTask />
                    </div>
                </div>

                <Suspense key={query + currentPage} fallback={<TaskTableSkeleton />}>
                    <Table query={query} currentPage={currentPage} />
                </Suspense>

                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>

            </div>
        </div>
    );
}
