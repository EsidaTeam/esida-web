import Link from "next/link";
import Image from "next/future/image";
import {BsGearFill, BsPersonBadgeFill, BsPersonFill, BsPersonXFill} from "react-icons/bs";
import {useUser} from "../../../utils/hooks";
import {useState} from "react";

export default function Header() {
    const user = useUser({});
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        {
            label: 'Профиль',
            icon: <BsPersonBadgeFill/>,
            href: '/users/me',
        },
        {
            label: 'Настройки',
            icon: <BsGearFill/>,
            href: '/settings',
        },
        {
            label: 'Выйти',
            icon: <BsPersonXFill/>,
            href: '/auth/logout',
        }
    ];

    return (
        <header className="flex justify-around items-center p-4 border-b border-solid border-gray-dark text-gray">
            <Link href="/">
                <a><Image src="/images/logo.png" alt="logo" className="h-16 no-drag"/></a>
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

            {user.user ? (
                <>
                    <a className="relative group text-primary flex items-center gap-2" href="#"
                       onClick={() => setMenuOpen(!menuOpen)}>
                        <BsPersonFill/> {user.userData.username || "username"}
                        <div
                            className={`absolute right-0 w-fit top-20 p-8 rounded bg-black border border-solid border-gray-dark z-10 flex flex-col gap-2 ${menuOpen ? 'block' : 'hidden'}`}>

                            {menuItems.map(item => (
                                <Link key={item.label} href={item.href}>
                                    <a className="flex items-center gap-2">
                                        {item.icon}
                                        <span className="text-lg text-gray-light">{item.label}</span>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </a>
                    <div
                        className={`absolute backdrop-blur-sm top-0 bottom-0 left-0 right-0 ${menuOpen ? 'block' : 'hidden'}`}
                        onClick={() => setMenuOpen(false)}
                    />
                </>
            ) : (
                <Link href="/auth">
                    <a className="text-primary flex items-center gap-2"><BsPersonFill/> Авторизация</a>
                </Link>
            )}
        </header>
    );
}