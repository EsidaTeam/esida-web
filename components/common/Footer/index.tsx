export default function Footer() {
    return (
        <footer className="flex justify-center items-center p-4 border-t border-solid border-gray-dark text-gray h-min">
            <p className="text-sm">
                Copyright © {new Date().getFullYear()} <a href="https://otomir23.me" className="text-gray-light" target="_blank" rel="noreferrer">otomir23</a>. Все права защищены.
            </p>
        </footer>
    );
}