import Link from "next/link";

export type NavLinkType = {
    href: string;
    title: string;
};

interface HorizontalMenuProps {
    links: NavLinkType[];
}
export default function HorizontalMenu({ links }: HorizontalMenuProps) {
    return (
        <ul className="flex justify-center flex-wrap">
            {links.map((link) => (
                <li key={link.title}>
                    <Link
                        className="btn btn-ghost font-mono text-[.5rem] lg:text-lg"
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
