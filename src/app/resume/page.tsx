import fs from "fs";
import matter from "gray-matter";
import { DownloadIcon, FileText } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import path from "path";

function getThing() {
  const mdFile = fs.readFileSync(
    path.join("src/app/resume/resume.md"),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(mdFile);

  return { frontMatter, content };
}
export default async function Page() {
  const props = getThing();

  return (
    <>
      <article className="mx-auto prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i py-10 ">
        <div className="flex items-center gap-2 justify-end">
          <Link
            href="/brennan-duck.pdf"
            className="hover:text-red-500 transition-colors flex justify-end items-center gap-2 pr-2 no-underline"
          >
            <p className="m-0 text-xs font-mono">View PDF</p>
            <FileText size={16} />
          </Link>
          <Link
            href="/brennan-duck.pdf"
            download="brennan-duck.pdf"
            className="hover:text-red-500 transition-colors flex justify-end items-center gap-2 pr-2 no-underline"
          >
            <p className="m-0 text-xs font-mono">Download PDF</p>
            <DownloadIcon size={16} />
          </Link>
        </div>
        <MDXRemote source={props.content}></MDXRemote>
      </article>
    </>
  );
}
