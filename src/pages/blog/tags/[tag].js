import React, { useEffect } from "react";
import { getPosts } from "@/helpers/utils";
import tagList from "@/data/tags.json"
import PostList from "@/components/PostList";

export const getStaticProps = ({ params }) => {
  const posts = getPosts(1, params.tag);

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths = () => {
  const paths = tagList.map((tagTitle) => {
    return {
      params: {
        tag: tagTitle
      },
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Tags({ posts }) {
  return (
    <PostList posts={posts} back header />
  );
};