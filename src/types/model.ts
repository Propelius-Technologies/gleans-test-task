export interface Content {
  media?: string;
  title: string;
  description: string;
  tags: string[];
  collections: string[];
}

export interface LinkMeta {
  title: string;
  description: string;
  images: string[];
  duration: number;
  domain: string;
  url: string;
}
