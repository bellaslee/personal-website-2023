import React from "react";
import { useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import PostItem from "./PostItem";
import BackButton from "./BackButton";
import styles from "@/styles/Blog.module.scss";
import tagList from "@/data/tags.json";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

gsap.registerPlugin(ScrollTrigger);

export default function PostList({ posts, header, back, selectedTag }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const [blog, setBlog] = useState();

  useIsomorphicLayoutEffect(() => {
    if (!blog) return;
    const ctx = gsap.context(() => {
      gsap.to(blog, {
        scrollTrigger: {
          target: blog,
          start: "75% 60%",
          onEnter: () => {
            loadMorePosts();
          },
        },
      })
    }, blog)

    return () => ctx.revert();
  }, [blog, currentPageIndex])


  const loadMorePosts = async () => {
    const fetchUrl = selectedTag === undefined ? `/api/posts?page=${currentPageIndex + 1}` : `/api/posts?page=${currentPageIndex + 1}&tag=${selectedTag}`;
    !noMorePosts ? setIsLoading(true) : null;
    const res = await fetch(fetchUrl);
    const posts = await res.json();

    setIsLoading(false);
    if (posts.length === 0) {
      setNoMorePosts(true);
    }
    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  const renderTagLinks = tagList.map((tag) => {
    return <Link key={tag} href={`../../blog/tags/${tag}`} className={styles.tag}>#{tag}</Link>
  });

  const renderPosts = filteredPosts?.map((post) => (
    <PostItem key={post.slug} post={post} />
  ))

  const title = selectedTag !== undefined ? `#${selectedTag}` : 'Blog'

  const renderHeader = (
    <div className={styles.header}>
      <Link href="../../blog" className="fancy normal"><h1>{title}</h1></Link>
      {selectedTag === undefined ? <p>Filter by tag: {renderTagLinks}</p> : ''}
    </div>
  )

  return (
    <>
      <div className="content" ref={setBlog}>
        {back ? <BackButton /> : ''}
        {header ? renderHeader : ''}
        {renderPosts}
        {isLoading ? 'Loading posts...' : ''}
      </div>
    </>
  );
}