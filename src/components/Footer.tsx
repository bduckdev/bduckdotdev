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
    icon: <Github color="white" size={40} strokeWidth={1.25} />,
    href: "https://github.com/bduckdev",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin color="white" size={40} strokeWidth={1.25} />,
    href: "https://linkedin.com/in/bduckdev",
  },
  {
    name: "Twitter",
    icon: <Twitter color="white" size={40} strokeWidth={1.25} />,
    href: "twitter.com/bduckdev",
  },
];
export default function Footer() {
  return (
    <footer className="bg-black w-screen h-24 p-8 flex justify-center gap-4">
      {footerLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          {link.icon}
        </Link>
      ))}
    </footer>
  );
}
