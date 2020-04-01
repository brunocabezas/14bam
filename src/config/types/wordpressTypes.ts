
// Wordrpess
export type WPEvent = {
  ID: number,
}

export type WPTitle = {
  rendered: string,
}

export type WPGuid = {
  rendered: string,
}

export type WPResponse = WPResponseItem[]

export type WPResponseItem = {
  id: number,
  date: string,
  date_gmt: string,
  guid: WPGuid,
  modified: string,
  modified_gmt: string,
  slug: string,
  status: string,
  type:  string,
  link: string,
  title: WPTitle,
  author: number,
  featured_media: number,
  parent: number,
  template: string,
  categories: any[],
  acf_fields: WPAcfFields,
  _links: WPLinks,
}

export type WPParticipant = {
  img: string,
  images: any[],
  keywords: string[]
}

export type WPParticipants = WPParticipant[]

type AcfGenericField = {
  [string: string]: any
}

export type WPAcfFields = AcfGenericField | ExpositionAcfFields;

type ExpositionAcfFields = { 
  [string: string]: any,
  web: string,
  direccion: string,
  texto_curatorial: string,
  espacio: string,
  titulo: string,
  // artistas: Artista[],
  artistas: [],
  // curadores: Curadore[],
  curadores: [],
  fecha_inicio: string,
  horarios: string,
  horarios_2: string,
  fecha_termino: string,
}

type Link =  {
  href: string;
}

type WPLinks = {
  self: Link[];
  collection: Link[];
  about: Link[];
  author: WPAuthor[];
  "wp:attachment": Link[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

type WPAuthor = {
  embeddable: boolean;
  href: string;
}


type WpTerm = {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

type Cury = {
  name: string;
  href: string;
  templated: boolean;
}

export type WPKeyword = {
  name: string,
  slug: string,
  term_id: number,
}

export type WpImage = {
  url: string,
  sizes : { 
    medium : string
  }
}

export interface WPPost {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
}


export type WPCategory = {
  slug: string,
  id: number,
  term_id: number,
  name: string
  description? : string
}

export type WPCategories = WPCategory[];