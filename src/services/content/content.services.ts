import supabase from '@/supabase/supabas.utils'

import { getLinkMeta } from '@/utils/storage.utils'
import { Content } from 'src/types/model'

export const addContent = async (content: Content) => {
  const meta = getLinkMeta()
  try {
    const res = await supabase
      .from('gleans')
      .insert([
        {
          title: content.title,
          description: content.description,
          link: meta.url || '',
          image: content.image || ''
        }
      ])
      .select()
      .throwOnError()
    if (res.data) {
      await supabase.from('tag_gleans').insert(
        content.tags.map(tag => ({
          tag_id: tag.id,
          glean_id: res.data[0].id
        }))
      )

      await supabase.from('collection_glean').insert(
        content.collections.map(collection => ({
          collection_id: collection.id,
          glean_id: res.data[0].id
        }))
      )
    }
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
