import { Collection } from 'src/types/model';
import { useState } from 'react';
import supabase from '@/supabase/supabas.utils';

export const useTags = () => {
  const [tags, setTags] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getTags = async () => {
    try {
      setLoading(true);
      const res = await supabase.from('tags').select('*');
      setTags(res.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { tags, loading, getTags };
};
