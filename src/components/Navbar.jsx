import { useEffect, useState } from "react";

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // =========================
    // DARK MODE
    // =========================

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    const toggleTheme = () => {
        setDark(!dark);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" }
    ];

    // =========================
    // ICONS
    // =========================

    const MoonIcon = () => (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );

    const SunIcon = () => (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );

    const MenuIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );

    const CloseIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );

    return (
        <>
            <header
                className="
                sticky top-0 z-50
                bg-yellow-300
                dark:bg-black
                border-b-[5px]
                border-black
                dark:border-white
                transition-all duration-300
                "
            >
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

                    {/* LOGO */}
                    <h1
                        className="
                        text-2xl md:text-3xl
                        font-black uppercase tracking-tight
                        hover:scale-105
                        transition-transform
                        cursor-pointer
                        text-black
                        dark:text-white
                        "
                    >
                        DAVIQ
                    </h1>

                    {/* DESKTOP NAV */}
                    <ul
                        className="
                        hidden md:flex
                        gap-8
                        font-bold uppercase text-sm
                        "
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="
                                    relative group py-2 px-1
                                    text-black
                                    dark:text-white
                                    transition-colors
                                    "
                                >
                                    {link.label}

                                    <span
                                        className="
                                        absolute bottom-0 left-0
                                        w-0 h-[3px]
                                        bg-black
                                        dark:bg-white
                                        group-hover:w-full
                                        transition-all duration-300
                                        "
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT BUTTONS */}
                    <div className="flex items-center gap-3">

                        {/* MODE BUTTON */}
                        <button
                            onClick={toggleTheme}
                            aria-label={
                                dark
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className="
                            border-[4px] border-black dark:border-white
                            px-4 py-2
                            bg-white dark:bg-black
                            text-black dark:text-white
                            font-black
                            flex items-center gap-2
                            shadow-[5px_5px_0px_black]
                            dark:shadow-[5px_5px_0px_white]
                            hover:-translate-x-1
                            hover:-translate-y-1
                            hover:shadow-[8px_8px_0px_black]
                            dark:hover:shadow-[8px_8px_0px_white]
                            active:translate-y-0
                            transition-all duration-200
                            "
                        >
                            {dark ? <SunIcon /> : <MoonIcon />}

                            <span className="hidden sm:inline">
                                {dark ? "LIGHT" : "MODE"}
                            </span>
                        </button>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                            className="
                            md:hidden
                            border-[4px]
                            border-black
                            dark:border-white
                            p-2
                            bg-white
                            dark:bg-black
                            text-black
                            dark:text-white
                            hover:bg-black
                            hover:text-white
                            dark:hover:bg-white
                            dark:hover:text-black
                            transition-all duration-200
                            "
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </nav>

                {/* MOBILE MENU */}
                {isMenuOpen && (
                    <div
                        className="
                        md:hidden
                        border-t-[4px]
                        border-black
                        dark:border-white
                        bg-yellow-300
                        dark:bg-black
                        animate-slideDown
                        "
                    >
                        <ul className="flex flex-col font-bold uppercase text-lg">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() =>
                                            setIsMenuOpen(false)
                                        }
                                        className="
                                        block px-6 py-4
                                        border-b-[3px]
                                        border-black
                                        dark:border-white
                                        text-black
                                        dark:text-white
                                        hover:bg-black
                                        hover:text-white
                                        dark:hover:bg-white
                                        dark:hover:text-black
                                        transition-colors
                                        "
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>

            {/* GLOBAL STYLE */}
            <style>{`
                html {
                    scroll-behavior: smooth;
                }

                body {
                    background: #f5f1e8;
                    color: black;
                    transition: background 0.3s ease, color 0.3s ease;
                }

                .dark body {
                    background: #0a0a0a;
                    color: white;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slideDown {
                    animation: slideDown 0.3s ease;
                }

                @media (max-width: 768px) {
                    nav {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;