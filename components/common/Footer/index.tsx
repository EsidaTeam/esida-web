export default function Footer() {
    return (
        <footer className="flex justify-center items-center p-4 border-t border-solid border-gray-dark text-gray h-min">
            <p className="text-sm">
                Copyright © {new Date().getFullYear()} <a href="https://github.com/EsidaTeam" className="text-gray-light" target="_blank" rel="noreferrer">EsidaTeam</a>. Все права защищены.
            </p>
        </footer>
    );
}