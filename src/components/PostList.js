import React from "react";
import { useState } from "react";
import Link from "next/link";
import Meta from "./Meta";
import PostItem from "./PostItem";
import styles from "@/styles/Blog.module.scss";
import tagList from "@/data/tags.json";

export default function PostList({ posts, tags }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`);
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  const renderTagLinks = tagList.map((tag) => {
    return <Link key={tag} href={`../../blog/tags/${tag}`} className={styles.tag}>{tag}</Link>
  });

  const renderPosts = filteredPosts?.map((post) => (
    <PostItem key={post.slug} post={post} />
  ))

  return (
    <>
      <Meta title="Blog | Bella Lee" />
      <section>
        <div className="content">
          <div className={styles.header}>
            <Link href="../../blog" className="fancy normal"><h1 className={styles.title}>Blog</h1></Link>
            {tags ? <p>Filter by tag: {renderTagLinks}</p> : ''}
          </div>
          {renderPosts}
          <button className={styles.button} onClick={loadMorePosts}>
            Load more
          </button>
        </div>
      </section>
    </>
  );
}