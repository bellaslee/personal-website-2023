import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormatMeta } from './FormatMeta';
import styles from '@/styles/Blog.module.scss';

export default function PostItem({ post }) {
  return (
    <article className={styles.postItem}>
      <h2 className={styles.postTitle}>
        {post.data.title}
      </h2>
      <FormatMeta date={post.data.date} tags={post.data.tags} />
      <p>{post.data.excerpt}</p>
      <Link href={`/blog/posts/${post.slug}`} className="fancy">Read more <FontAwesomeIcon icon={faArrowRight} /></Link>
    </article>
  );
};