import HorizontalMenu, { NavLinkType } from "@/components/HorizontalMenu";
import {
    ArrowBigDown,
    ArrowBigUp,
    FolderGit2,
    LucideIcon,
    MessageSquareMore,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type HeroNavLinkType = {
    href: string;
    title: string;
    icon: ReactNode;
};
const heroLinks: HeroNavLinkType[] = [
    {
        href: "/portfolio",
        title: "my projects",
        icon: <FolderGit2 size={32} />,
    },
    {
        href: "/contact",
        title: "contact me",
        icon: <MessageSquareMore size={32} />,
    },
];

export default function Home() {
    return (
        <main>
            <div className="hero min-h-[calc(70vh)]">
                <div className="hero-content text-center">
                    <div className="max-w-5xl">
                        <h1 className="text-3xl lg:text-5xl font-mono">Hello there</h1>
                        <p className="py-6 font-semibold text-sm lg:text-md">
                            My name is Brennan Duck. I am a full-stack web dev. I do
                            JavaScript and Go mostly.
                        </p>
                        <div className="pt-5 lg:pt-16">
                            <p className="font-mono">want to learn more?</p>
                            <ul className="mx-auto flex justify-center items-center pt-6 gap-8">
                                {heroLinks.map((link) => (
                                    <li key={link.title} className="">
                                        <Link
                                            className="hover:text-red-500 text-[1rem] lg:text-lg font-semibold flex flex-col justify-center items-center"
                                            href={link.href}
                                        >
                                            {link.icon}
                                            <span className="underline underline-offset-2">
                                                {link.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
