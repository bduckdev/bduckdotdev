import HorizontalMenu, { NavLinkType } from "@/components/HorizontalMenu";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

const heroLinks: NavLinkType[] = [
    {
        href: "/portfolio",
        title: "check out my projects",
    },
    {
        href: "/contact",
        title: "get in touch with me",
    },
];

export default function Home() {
    return (
        <main>
            {/*
            <div className="mx-auto flex justify-center items-center flex-col">
                <ArrowBigUp size={50} />
                <p className="font-mono">
                    please go somewhere else, this page is boring
                </p>
            </div>
*/}
            <div className="hero min-h-[calc(70vh)]">
                <div className="hero-content text-center">
                    <div className="max-w-5xl">
                        <h1 className="text-5xl font-mono">Hello there</h1>
                        <p className="py-6 font-mono">
                            My name is Brennan Duck. I am a full-stack web dev. I do
                            JavaScript and Go mostly.
                        </p>
                        <div className="mx-auto flex justify-center items-center mt-16 gap-8">
                            <ArrowBigDown size={50} />
                            <p className="font-mono">want to learn more?</p>
                            <ArrowBigDown size={50} />
                        </div>
                        <HorizontalMenu links={heroLinks} />
                    </div>
                </div>
            </div>
        </main>
    );
}
