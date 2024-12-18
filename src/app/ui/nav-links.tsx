"use client";
import {
    // UserGroupIcon,
    PlusIcon
    // DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Home, List } from "@mui/icons-material";

// Map of links to display in the navigation bar.
const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Task List", href: "/task/list", icon: List },
    { name: "Add Task", href: "/task/create", icon: PlusIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex items-center gap-3 rounded-md p-2 text-base font-medium transition-colors duration-200",
                            {
                                "bg-red-500 text-white": pathname === link.href,
                                "text-gray-400 hover:bg-red-400 hover:text-white": pathname !== link.href,
                            }
                        )}>
                        <LinkIcon className="w-6" />
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}