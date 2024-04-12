import HorizontalMenu, { NavLinkType } from "./HorizontalMenu";

const navLinks: NavLinkType[] = [
    {
        href: "/",
        title: "home",
    },
    {
        href: "/blog",
        title: "blog",
    },
    {
        href: "/portfolio",
        title: "portfolio",
    },
    {
        href: "/contact",
        title: "resume/contact",
    },
];

function Header() {
    return (
        <header className="text-center p-2">
            <p className="text-3xl font-semibold">bduck.dev</p>
            <HorizontalMenu links={navLinks} />
        </header>
    );
}

export default Header;