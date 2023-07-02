import React from "react";
import { getPosts } from '../../helpers/utils';
import PostList from "@/components/PostList";

export const getStaticProps = () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }) {
  return (
    <PostList posts={posts} tags={true} />
  );
};