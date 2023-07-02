import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export function getParsedFileContentBySlug(slug, dir) {
  const filePath = path.join(dir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath);

  const { data, content } = matter(fileContent);

  return { data, content };
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const renderMarkdown = async (markdownContent) => {
  return await markdownToHtml(markdownContent || '');
};