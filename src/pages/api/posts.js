import { getPosts } from '../../helpers/utils';

export default function handler(req, res) {
  const { page, tag } = req.query;
  const posts = tag ? getPosts(page, tag) : getPosts(page);
  res.status(200).json(posts);
}