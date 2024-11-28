import Link from 'next/link';
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { HiDocument } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="text-black row-start-3 flex gap-6 flex-wrap items-center justify-center mt-auto p-4 bg-yellow-200">
            <Link
                className="text-black flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://linkedin.com/in/imaninamajeed"
                target="_blank"
                rel="noopener noreferrer"
            >
                Footer
            </Link>
        </footer>
    );
};

export default Footer;