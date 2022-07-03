import Link from "next/link";
import Image from "next/future/image";
import {FaUser} from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex justify-around items-center p-4 border-b border-solid border-gray-dark text-gray">
            <Link href="/">
                <a><Image src="/images/logo.png" alt="logo" className="h-16"/></a>
            </Link>

            <nav className="flex gap-8">
                <Link href="/groups">
                    <a>Группы</a>
                </Link>
                <Link href="/users">
                    <a>Граждане</a>
                </Link>
                <Link href="/tools">
                    <a>Инструменты</a>
                </Link>
            </nav>

            <Link href="/auth">
                <a className="text-primary flex items-center gap-2"><FaUser/> Авторизация</a>
            </Link>

        </header>
    );
}