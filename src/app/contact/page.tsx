import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="mx-auto max-w-3xl min-h-[calc(85vh)] pb-36 lg:py-36">
            <h1 className="text-center font-black text-2xl pb-2">Contact Me</h1>
            <section className="grid grid-cols-1 gap-12">
                <div className="mx-auto flex flex-col justify-center items-center pt-6">
                    <ul className="pt-2 flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-12 ">
                        <li className="flex items-center gap-1">
                            <Link
                                href="mailto:brennantduck@gmail.com"
                                className="hover:text-red-500 transition-colors flex flex-col items-center justify-center gap-2"
                            >
                                <Mail size={48} />
                                <p className="font-normal text-sm">brennantduck@gmail.com</p>
                            </Link>
                        </li>
                        <li className="flex items-center gap-1">
                            <Link
                                href="mailto:brennantduck@gmail.com"
                                className="hover:text-red-500 transition-colors flex flex-col items-center justify-center gap-2"
                            >
                                <Phone size={48} />
                                <p className="font-normal text-sm">available upon request</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto flex flex-col justify-center items-center pt-6">
                    <h2 className="font-bold pb-2">Socials</h2>
                    <ul className="pt-2 flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-12">
                        <li className="flex items-center gap-1">
                            <Link
                                href="https://twitter.com/bduckdev"
                                className="hover:text-red-500 transition-colors flex flex-col items-center justify-center gap-2"
                            >
                                <Twitter size={48} />
                                <p className="font-normal text-sm">@bduckdev</p>
                            </Link>
                        </li>
                        <li className="flex items-center gap-1">
                            <Link
                                href="https://github.com/bduckdev"
                                className="hover:text-red-500 transition-colors flex flex-col items-center justify-center gap-2"
                            >
                                <Github size={48} />
                                <p className="font-normal text-sm">@bduckdev</p>
                            </Link>
                        </li>
                        <li className="flex items-center gap-1">
                            <Link
                                href="https://linkedin.com/in/bduckdev"
                                className="hover:text-red-500 transition-colors flex flex-col items-center justify-center gap-2"
                            >
                                <Linkedin size={48} />
                                <p className="font-normal text-sm">/in/bduckdev</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
