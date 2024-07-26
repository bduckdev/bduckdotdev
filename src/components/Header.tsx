"use client";
import { useEffect } from "react";
import "./Header.css";
import HorizontalMenu, { NavLinkType } from "./HorizontalMenu";
import Link from "next/link";

const navLinks: NavLinkType[] = [
    {
        href: "/blog",
        title: "blog",
    },
    {
        href: "/portfolio",
        title: "portfolio",
    },
    {
        href: "/resume",
        title: "resume",
    },
    {
        href: "/contact",
        title: "contact",
    },
];

function Header() {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = (e: Event) => {
        const header = document.querySelector(".header-section");
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header!.classList.add("is-sticky")
            : header!.classList.remove("is-sticky");
    };

    return (
        <header className="header-section w-full h-24 text-center p-4 flex items-center justify-between lg:justify-evenly transition-all">
            <Link
                href="/"
                className="hover:text-red-500 transition-colors text-xl lg:text-3xl font-semibold"
            >
                bduck.dev
            </Link>
            <HorizontalMenu links={navLinks} />
        </header>
    );
}

export default Header;
