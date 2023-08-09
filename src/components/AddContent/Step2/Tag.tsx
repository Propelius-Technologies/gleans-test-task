'use client'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import { Tag } from 'src/types/model'

import Icon from 'src/components/shared/Icon'

interface Props {
  tag: Tag
  index: number
  selectedDefault?: boolean
  onSelect?: (x: Tag) => void
  onUnselect?: (x: Tag) => void
}

const TagChip: FC<Props> = ({ onSelect, onUnselect, tag, index, selectedDefault }) => {
  const [selected, setSelected] = useState<boolean>(!!selectedDefault)

  const handleSelect = () => {
    setSelected(true)

    onSelect && onSelect(tag)
  }

  const handleUnselect = () => {
    setSelected(false)
    onUnselect && onUnselect(tag)
  }

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.15 * index }}
      className="bg-ga-grey bg-opacity-20 rounded-full bg flex text-sm gap-x-2 items-center px-3 h-9 text-white font-primary">
      {tag.name}
      <div className=" items-center flex gap-x-2">
        {' '}
        {!selected && (
          <>
            {' '}
            <div onClick={handleSelect}>
              <Icon name="add" className="w-2 h-2" color="#00FF85" />
            </div>
            <div style={{ width: 1, height: 13 }} className="bg-white bg-opacity-10" />
          </>
        )}
        <div onClick={handleUnselect}>
          <Icon name="remove" className="w-2 h-2" color="#B9B9B9" />
        </div>
      </div>
    </motion.div>
  )
}

export default TagChip
