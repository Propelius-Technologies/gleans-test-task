import { emojiURIs } from '@/constants/dummy.constants';
import { Content, LinkMeta } from '@/types/model';

export const convertMetaToContent = (meta: LinkMeta): Content => ({
  collections: [],
  description: meta.description,
  tags: [],
  title: meta.title,
  image: meta.images[0],
});

export const getRandomEmojies = () =>
  emojiURIs[Math.floor(Math.random() * emojiURIs.length)];
