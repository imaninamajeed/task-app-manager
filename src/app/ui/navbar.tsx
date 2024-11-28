import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/app/ui/logo';
export default function Navbar() {

    return (
        <header>
            <div className={`mx-auto flex items-center justify-between p-3 bg-yellow-200`}>
                <Link href="/" className={`flex items-center`}>
                    <Logo />
                </Link>
                <nav className="flex space-x-3">
                    <NavLinks />
                </nav>
            </div>
        </header>
    );
}