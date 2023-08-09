import { Content, LinkMeta } from '@/types/model';

export const convertMetaToContent = (meta: LinkMeta): Content => ({
  collections: [],
  description: meta.description,
  tags: [],
  title: meta.title,
  image: meta.images[0],
});
