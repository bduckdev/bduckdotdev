import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function Blog() {
  const postsDir = "src/app/blog/posts";
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
      <h2 className="text-2xl font-black">Posts</h2>
      {posts.map((post) => (
        <Link href={"/blog/" + post.slug} passHref key={post.slug}>
          <div className="flex justify-evenly bg-base-200 hover:bg-gray-300 transition-colors">
            <div className="w-1/2 flex-col flex justify-between">
              <h2 className="text-xl font-black pt-1">{post.meta.title}</h2>
              <p className="text-xs italic pb-1">{post.meta.description}</p>
              <p className="text-sm font-mono hover:text-red-500 transition-colors">
                click to read
              </p>
            </div>
            <Image
              height={150}
              width={150}
              src={post.meta.image}
              alt=""
              className="w-24 h-24 object-cover"
            />
          </div>
        </Link>
      ))}
    </>
  );
}
