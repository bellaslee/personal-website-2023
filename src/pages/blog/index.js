import Meta from "@/components/Meta";
import React from "react";
import Link from "next/link";

export const getStaticProps = () => {
  const posts = getPosts(1); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }) {
  return (
    <>
      <Meta />
      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post) => (
          <p key={post.slug}>{post.data.title}</p>
        ))}
      </div>
    </>
  );
};