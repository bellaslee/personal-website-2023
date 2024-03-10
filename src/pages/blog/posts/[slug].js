import fs from "fs";
import path from "path";
import React from "react";

import { getParsedFileContentBySlug, renderMarkdown } from "@/helpers/markdown";

import styles from "@/styles/Blog.module.scss";

import { FormatMeta } from "@/components/FormatMeta";
import BackButton from "@/components/BackButton";
import Meta from "@/components/Meta";

const POST_DIR = path.join(process.cwd(), 'posts/');

export const getStaticProps = async ({ params }) => {
  const articleMarkdownContent = getParsedFileContentBySlug(params.slug, POST_DIR);

  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      data: articleMarkdownContent.data,
      content: renderedHTML
    }
  }
}

export const getStaticPaths = () => {
  const paths = fs
    .readdirSync(POST_DIR)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ data, content }) {
  return (
    <>
      <Meta title={`${data.title}`} />
      <section>
        <div className="content">
          <BackButton />
          <div className={styles.header}>
            <h1 className={styles.title}>{data.title}</h1>
            <FormatMeta date={data.date} tags={data.tags} />
            <blockquote>{data.excerpt}</blockquote>
          </div>
          <article dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </>
  )
}