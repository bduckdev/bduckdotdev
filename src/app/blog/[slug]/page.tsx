import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import path from "path";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/app/blog/posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const mdFile = fs.readFileSync(
    path.join("src/app/blog/posts", slug + ".mdx"),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(mdFile);

  return { frontMatter, slug, content };
}

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i">
      <h1>{props.frontMatter.title}</h1>
      <p>{props.frontMatter.date}</p>
      <Image
        className="w-full h-48 object-contain"
        src={props.frontMatter.image}
        width={1000}
        height={1000}
        alt=""
      />
      <MDXRemote source={props.content}></MDXRemote>
    </article>
  );
}
