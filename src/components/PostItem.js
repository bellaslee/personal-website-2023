import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/BlogHome.module.scss';

export default function PostItem({ post }) {
  const formatDate = (date) => {
    const newDate = new Date(Date.parse(date)).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });
    return newDate;
  }
  return (
    <div className={styles.postItem}>
      <h4 className={styles.postTitle}>
        {post.data.title}
      </h4>
      <p className={styles.date}>{formatDate(post.data.publishedOn)}</p>
      <p>{post.data.excerpt}</p>
      <Link href={`/blog/posts/${post.slug}`}>Read more <FontAwesomeIcon icon={faArrowRight} /></Link>
    </div>
  );
};