import React from "react";
import Link from "next/link";
import styles from '@/styles/Blog.module.scss';

export function FormatMeta({ date, tags, readTime }) {

  const newDate = new Date(Date.parse(date)).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });
  const tagLinks = tags?.map((tag, index) => {
    return (
      <span key={tag} className={styles.tag}>
        #{tag}
        {index === tags.length - 1 ? '' : ','}
      </span>
    )
  })
  return <p className={styles.meta}>{readTime} min read • Published on: {newDate} • Tags: {tagLinks ? tagLinks : 'none'}</p>;
}