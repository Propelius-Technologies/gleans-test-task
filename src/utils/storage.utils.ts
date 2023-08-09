import { LocalStorageKeys } from '@/constants/keys.constants';
import { LinkMeta } from '@/types/model';

export const getLinkMeta = () =>
  JSON.parse(localStorage.getItem(LocalStorageKeys.LINK_META) || '{}');

export const setLinkMeta = (meta: LinkMeta) =>
  localStorage.setItem(LocalStorageKeys.LINK_META, JSON.stringify(meta));
