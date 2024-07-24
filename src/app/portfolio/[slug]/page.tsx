import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const postsDir = "src/app/portfolio/projects";
export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(postsDir));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

function getPost({ slug }: { slug: string }) {
    const mdFile = fs.readFileSync(path.join(postsDir, slug + ".mdx"), "utf-8");
    const { data: frontMatter, content } = matter(mdFile);

    return { frontMatter, slug, content };
}

export default function Page({ params }: any) {
    const props = getPost(params);

    return (
        <article className="mx-auto prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i max-w-none">
            <div className="flex items-center justify-between px-5">
                <div className="w-1/2">
                    <h1>{props.frontMatter.title}</h1>
                    <p>{props.frontMatter.description}</p>
                    <div className="flex gap-3">
                        <Link className="font-mono text-xs" href={props.frontMatter.link}>
                            try it out
                        </Link>
                        {props.frontMatter.repo !== "none" && (
                            <Link
                                className="font-mono text-xs"
                                href={"https://github.com/" + props.frontMatter.repo}
                            >
                                check out the repo
                            </Link>
                        )}
                    </div>
                </div>
                <Image
                    className="w-1/2 h-48 object-contain"
                    src={props.frontMatter.image}
                    width={1000}
                    height={1000}
                    alt=""
                />
            </div>
            <MDXRemote source={props.content}></MDXRemote>
        </article>
    );
}
