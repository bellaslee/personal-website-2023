import React from "react";

import { getPosts } from '../../helpers/utils';

import Meta from "@/components/Meta";
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
    <>
      <Meta title="Blog | Bella Lee" />
      <PostList posts={posts} tags header />
    </>
  );
};