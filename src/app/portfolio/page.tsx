import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function PortfolioPage() {
    const postsDir = "src/app/portfolio/projects";
    const files = fs.readdirSync(path.join(postsDir));

    const posts = files.map((filename) => {
        const fileContents = fs.readFileSync(
            path.join(postsDir, filename),
            "utf-8",
        );

        const { data: frontMatter } = matter(fileContents);

        return {
            meta: frontMatter,
            slug: filename.replace(".mdx", ""),
        };
    });

    return (
        <>
            <h1 className="text-3xl font-black p-5">Portfolio</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {posts.map((post) => (
                    <Link href={"/portfolio/" + post.slug} passHref key={post.slug}>
                        <div className="flex justify-evenly bg-base-200 hover:bg-gray-300 transition-colors py-2 lg:py-5 px-2 items-center">
                            <div className="w-1/2 flex-col flex justify-between gap-3">
                                <h2 className="text-xl font-black pt-1">{post.meta.title}</h2>
                                <p className="hidden lg:block text-[.5rem] lg:text-[.75rem] font-semibold">
                                    {post.meta.techStack}
                                </p>
                                <p className="text-sm italic pb-1">{post.meta.description}</p>
                                <p className="text-sm font-mono hover:text-red-500 transition-colors">
                                    learn more
                                </p>
                            </div>
                            <Image
                                height={250}
                                width={250}
                                src={post.meta.image}
                                alt=""
                                className="size-24 lg:size-48 object-cover"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
