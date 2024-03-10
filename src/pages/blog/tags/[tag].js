import React, { useEffect } from "react";

import { getPosts } from "@/helpers/utils";
import tagList from "@/data/tags.json"

import PostList from "@/components/PostList";
import Meta from "@/components/Meta";

export const getStaticProps = ({ params }) => {
  const posts = getPosts(1, params.tag);
  const selectedTag = params.tag;

  return {
    props: {
      posts,
      selectedTag
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

export default function Tags({ posts, selectedTag }) {
  return (
    <>
      <Meta title="Blog | Tags" />
      <section>
        <PostList posts={posts} selectedTag={selectedTag} back header />
      </section>
    </>
  );
};