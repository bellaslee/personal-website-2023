import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// TODO: sort posts by date
export function getPosts(pageIndex) {
  const relativePath = 'src/pages/blog/posts'
  const dir = path.resolve(process.cwd(), relativePath)
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
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
    })
    .filter((post) => post)
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