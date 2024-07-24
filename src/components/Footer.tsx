import { Github, Linkedin, LucideIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Link = {
    name: string;
    icon: ReactNode;
    href: string;
};
const footerLinks: Link[] = [
    {
        name: "Github",
        icon: (
            <Github
                className="p-1 rounded-xl hover:bg-red-500"
                color="white"
                size={40}
                strokeWidth={1.25}
            />
        ),
        href: "https://github.com/bduckdev",
    },
    {
        name: "LinkedIn",
        icon: (
            <Linkedin
                className="p-1 rounded-xl hover:bg-red-500"
                color="white"
                size={40}
                strokeWidth={1.25}
            />
        ),
        href: "https://linkedin.com/in/bduckdev",
    },
    {
        name: "Twitter",
        icon: (
            <Twitter
                className="p-1 rounded-xl hover:bg-red-500"
                color="white"
                size={40}
                strokeWidth={1.25}
            />
        ),
        href: "https://twitter.com/bduckdev",
    },
];
export default function Footer() {
    return (
        <footer className="absolute left-0 bottom-0 w-full h-12 lg:h-24">
            <div className="bg-black w-screen h-24 p-8 flex justify-center gap-4">
                {footerLinks.map((link) => (
                    <Link href={link.href} key={link.name} className="">
                        {link.icon}
                    </Link>
                ))}
            </div>
        </footer>
    );
}
