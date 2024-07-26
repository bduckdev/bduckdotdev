import Link from "next/link";

export type NavLinkType = {
    href: string;
    title: string;
};

interface HorizontalMenuProps {
    links: NavLinkType[];
    className?: string;
}
export default function HorizontalMenu({
    links,
    className,
}: HorizontalMenuProps) {
    return (
        <ul className={"flex justify-center flex-wrap gap-3 " + className}>
            {links.map((link) => (
                <li key={link.title} className="">
                    <Link
                        className="hover:text-red-500 transition-colors text-[.5rem] lg:text-lg font-semibold"
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
