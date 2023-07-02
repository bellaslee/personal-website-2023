import React from "react";
import Link from "next/link";
import styles from '@/styles/Blog.module.scss';

export function FormatMeta({ date, tags }) {
  const newDate = new Date(Date.parse(date)).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });
  const tagLinks = tags?.map((tag) => {
    return (
      <Link key={tag} href={`../../blog/tags/${tag}`}>{tag}</Link>
    )
  })
  return <p className={styles.meta}>Published on: {newDate} • Tags: {tagLinks ? tagLinks : 'none'}</p>;
}