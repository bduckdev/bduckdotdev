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
        <ul className="menu menu-horizontal m-1">
            {links.map((link) => (
                <li key={link.title}>
                    <Link className="font-mono text-[.5rem] lg:text-lg" href={link.href}>
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
