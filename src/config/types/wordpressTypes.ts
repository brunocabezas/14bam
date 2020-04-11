// Wordrpess data types
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
  id: number;
  date: string;
  date_gmt: string;
  guid: WPGuid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPTitle,
  content: WPContent;
  excerpt: WPExcerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  acf_fields: WPAcfFields;
  _links: WPLinks;
}

export interface WPContent {
  rendered: string;
  protected: boolean;
}

export interface WPExcerpt {
  rendered: string;
  protected: boolean;
}

export interface WPLinks {
  self: Link[];
  collection: Link[];
  about: Link[];
  author: Author[];
  replies: Reply[];
  'version-history': VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'wp:attachment': WpAttachment[];
  curies: Cury[];
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Reply {
  embeddable: boolean;
  href: string;
}

interface VersionHistory {
  count: number;
  href: string;
}

interface PredecessorVersion {
  id: number;
  href: string;
}

interface WpAttachment {
  href: string;
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Link {
  href: string;
}

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

type WPAuthor = {
  embeddable: boolean;
  href: string;
}

type WpTerm = {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export type WPKeyword = {
  name: string,
  slug: string,
  term_id: number,
}

export interface WpImage {
  ID: number;
  id: number;
  title: string;
  filename: string;
  url: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  date: string;
  modified: string;
  mime_type: string;
  type: string;
  icon: string;
  width: number;
  height: number;
  sizes: WpImageSizes;
}

export interface WpImageSizes {
  thumbnail: string;
  'thumbnail-width': number;
  'thumbnail-height': number;
  medium: string;
  'medium-width': number;
  'medium-height': number;
  medium_large: string;
  'medium_large-width': number;
  'medium_large-height': number;
  large: string;
  'large-width': number;
  'large-height': number;
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
