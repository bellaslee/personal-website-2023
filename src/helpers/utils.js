import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POST_DIR = path.join(process.cwd(), 'posts/');

export function getPosts(pageIndex, tag) {
  const relativePath = './posts';
  const dir = path.resolve(POST_DIR)
  const dirFiles = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), relativePath, file.name),
        'utf-8'
      );
      const slug = file.name.replace(/.mdx$/, '');
      const { data, content } = matter(fileContent);

      return { data, content, slug };
    })
    .filter((post) => {
      if (tag && post.data.tags) {
        return post.data.tags.includes(tag);
      } else if (tag) {
        return false;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      const aDate = new Date(a.data.publishedOn);
      const bDate = new Date(b.data.publishedOn);
      if (aDate > bDate) {
        return -1;
      } else if (aDate === bDate) {
        return 0;
      }
      return 1;
    });

  return filterPostsByPageIndex(posts, pageIndex);
};

function filterPostsByPageIndex(posts, pageIndex) {
  const postPerPage = 5;
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage;

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts
    .filter(
      (post, index) => index < totalPagePosts && index >= prevPagePosts
    );
};

export function getPost(slug) {
  if (slug) {
    const file = POST_DIR + slug + '.mdx';
    const fileContent = fs.readFileSync(
      file, 'utf-8'
    );
    const { data, content } = matter(fileContent);
    return { data, content };
  }
  return {};
}