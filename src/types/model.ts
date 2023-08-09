export interface Collection {
  name: string
  id: string
}

export interface Tag {
  name: string
  id: string
}

export interface Content {
  image?: string
  title: string
  description: string
  tags: Tag[]
  collections: Collection[]
}

export interface LinkMeta {
  title: string
  description: string
  images: string[]
  duration: number
  domain: string
  url: string
}
