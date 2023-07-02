import React from "react";
import { useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Meta from "./Meta";
import PostItem from "./PostItem";
import BackButton from "./BackButton";
import styles from "@/styles/Blog.module.scss";
import tagList from "@/data/tags.json";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

export default function PostList({ posts, tags, header, back }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const [blog, setBlog] = useState();

  // useIsomorphicLayoutEffect(() => {
  //   if (!blog) return;
  //   const ctx = gsap.context(() => {
  //     gsap.from(blog, {
  //       duration: 0.7,
  //       yPercent: 2,
  //       opacity: 0,
  //       filter: "blur(5px)"
  //     })
  //   }, blog)

  //   return () => ctx.revert();
  // }, [blog])

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

  const renderHeader = (
    <div className={styles.header}>
      <Link href="../../blog" className="fancy normal"><h1>Blog</h1></Link>
      {tags ? <p>Filter by tag: {renderTagLinks}</p> : ''}
    </div>
  )

  const renderLoadMore = (
    <button className={styles.button} onClick={loadMorePosts}>
      Load more
    </button>
  )

  return (
    <>
      <section ref={setBlog}>
        <div className="content">
          {back ? <BackButton /> : ''}
          {header ? renderHeader : ''}
          {renderPosts}
          {header ? renderLoadMore : ''}
        </div>
      </section>
    </>
  );
}