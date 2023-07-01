import Meta from "@/components/Meta";
import React from "react";
import Link from "next/link";
import { getPosts } from '../../scripts/utils';
import { useState } from "react";
import PostItem from "@/components/PostItem";
import styles from "@/styles/BlogHome.module.scss";

export const getStaticProps = () => {
  const posts = getPosts(1); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };


  return (
    <section>
      <div className="content">
        <h2>Blog</h2>
        {filteredPosts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
        <button className={styles.button} onClick={loadMorePosts}>
          Load more
        </button>
      </div>
    </section>
  );
};