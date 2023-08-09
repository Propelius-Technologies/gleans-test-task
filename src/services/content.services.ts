import supabase from '@/supabase/supabas.utils';
import { customAlphabet } from 'nanoid';

import { getLinkMeta } from '@/utils/storage.utils';
import { Content } from 'src/types/model';

const nanoid = customAlphabet('1234567890', 18);

export const addContent = async (content: Content) => {
  const meta = getLinkMeta();
  try {
    await supabase
      .from('gleans')
      .insert([{
        id: nanoid(),
        title: content.title,
        description: content.description,
        link: meta.url || '',
        image: content.image || '',
      }])
      .select()
      .throwOnError();
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
