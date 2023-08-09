import supabase from '@/supabase/supabas.utils';

import { getLinkMeta } from '@/utils/storage.utils';
import { Content } from 'src/types/model';

export const addContent = async (content: Content) => {
  const meta = getLinkMeta();
  try {
    await supabase
      .from('gleans')
      .insert([{
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
