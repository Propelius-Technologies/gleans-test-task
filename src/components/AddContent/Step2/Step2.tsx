'use client'
import { FC, useState } from 'react'

import { Collection, Content } from 'src/types/model'

import Collections from './Collections'
import ContentDetails from './ContentDetails'
import { isEmpty } from 'lodash'
import { getLinkMeta } from '@/utils/storage.utils'
import { convertMetaToContent } from '@/utils/content.utils'
import { AnimatePresence, motion } from 'framer-motion'
import { addContent } from '@/services/content/content.services'

const defaultContent: Content = {
  title: 'Very very long title or collection name',
  tags: [],
  collections: [],
  description:
    'This is where a detailed scraped description would appear in a glean or collection. If it gets too long, it will start to fade out so that editors can think free and edit the text if needed.'
}

interface Props {
  moveToStep: (step: number) => void
}

const Step2: FC<Props> = ({ moveToStep }) => {
  const [collectionOpen, setCollectionsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<Content>(
    isEmpty(getLinkMeta()) ? defaultContent : convertMetaToContent(getLinkMeta())
  )

  const handleContentUpdate = (content: Partial<Content>) => {
    setContent(prev => ({ ...prev, ...content }))
  }

  const onCollectionSave = (collections: Collection[]) => {
    setContent(prev => ({ ...prev, collections }))
    setCollectionsOpen(false)
  }

  const toggleCollections = () => setCollectionsOpen(prev => !prev)

  const onContentSave = async () => {
    const res = await addContent(content)

    if (!res.success) {
      alert('glean not added')
      return
    }

    moveToStep(3)
  }
  const moveBack = () => moveToStep(1)

  return (
    <div className="fixed top-0 left-0 bottom-0 overflow-y-scroll min-h-screen w-full flex flex-col items-center justify-between pt-16 px-7">
      <AnimatePresence mode="wait">
        {collectionOpen ? (
          <Collections
            key="collections-component"
            defaultCollections={content.collections}
            onSave={onCollectionSave}
          />
        ) : (
          <ContentDetails
            key="content-details-component"
            content={content}
            toggleCollections={toggleCollections}
            onContentUpate={handleContentUpdate}
            onContentSave={onContentSave}
            moveBack={moveBack}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Step2
