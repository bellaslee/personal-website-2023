import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormatMeta } from './FormatMeta';
import styles from '@/styles/Blog.module.scss';
import { useRouter } from 'next/router';

export default function PostItem({ post }) {
  const router = useRouter();

  const imgStyles = {
    objectFit: "cover"
  }

  const renderThumbnail = (
    <div className={styles.postThumbnail}>
      <Image
        src={post.data.thumbnail}
        alt={`Post thumbnail for ${post.data.title}`}
        fill={true}
        style={imgStyles} />
    </div>
  )

  return (
    <article className={styles.postItem} onClick={() => { router.push(`/blog/posts/${post.slug}`)}}>
      { post.data.thumbnail !== undefined ? renderThumbnail : '' }
      < div className = { styles.postContent } >
        <h2 className={styles.postTitle}>
          {post.data.title}
        </h2>
        <FormatMeta date={post.data.date} tags={post.data.tags} />
        <p>{post.data.excerpt}</p>
        <Link href={`/blog/posts/${post.slug}`} className="fancy">Read more <FontAwesomeIcon icon={faArrowRight} /></Link>
      </div >
    </article >
  );
};