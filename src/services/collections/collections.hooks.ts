import { Collection } from 'src/types/model'
import { useState } from 'react'
import supabase from '@/supabase/supabas.utils'

export const useCollections = () => {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCollections = async () => {
    try {
      setLoading(true)
      const res = await supabase.from('collections').select('*')
      setCollections(res.data || [])
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return { collections, loading, getCollections }
}
