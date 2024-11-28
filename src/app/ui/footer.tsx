import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-black row-start-3 flex gap-6 flex-wrap items-center justify-center mt-auto p-4 bg-yellow-200">
            <Link
                className="text-gray-400 flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/imaninamajeed"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub /> GitHub
            </Link>
        </footer>
    );
};

export default Footer;