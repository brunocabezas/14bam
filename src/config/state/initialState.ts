import {
  Exposition,
  Program,
  Category,
  DateObject,
  Page,
  Keyword,
  Event,
  SponsorCategory
} from '../types/types'
import { wpPost } from './initialWordpressState'

// Fallback states are declared in this file
export const exposition: Exposition = {
  slug: '',
  name: '',
  description: '',
  place: '',
  hour: '',
  hour2: '',
  web: '',
  webText: '',
  address: '',
  startDate: '',
  endDate: '',
  mainImg: {
    ID: 0,
    id: 0,
    title: '100 es un color20',
    filename: '100-es-un-color20.jpg',
    url:
      'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/100-es-un-color20.jpg',
    alt: '',
    author: '4',
    description: '',
    caption: '',
    name: '100-es-un-color20',
    date: '2019-10-17 00:32:11',
    modified: '2019-10-17 00:32:18',
    mime_type: 'image/jpeg',
    type: 'image',
    icon:
      'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
    width: 0,
    height: 0,
    sizes: {
      thumbnail: '',
      'thumbnail-width': 0,
      'thumbnail-height': 0,
      medium: '',
      'medium-width': 0,
      'medium-height': 0,
      medium_large: '',
      'medium_large-width': 0,
      'medium_large-height': 0,
      large: '',
      'large-width': 0,
      'large-height': 0
    }
  },
  images: [],
  artists: [],
  curators: [],
  audioGuideSpotifyURL: ''
}

export const date: DateObject = {
  jsDate: new Date(),
  day: '21',
  month: 'monthName',
  dateString: 'dateString',
  time: ''
}

export const event: Event = {
  id: 0,
  slug: '',
  title: '',
  description: '',
  image: '',
  place: wpPost,
  limitedTickets: false,
  participants: [],
  videoUrl: '',
  date,
  program: [],
  summary: ''
}

export const program: Program = {
  id: -1,
  slug: '',
  text: '',
  name: '',
  events: [],
  mainProgram: wpPost,
  date,
  images: [],
  participants: []
}

export const category: Category = {
  id: 0,
  name: '',
  order: '',
  description: '',
  sponsors: []
}

export const sponsorCategory: SponsorCategory = {
  id: 0,
  name: '',
  description: ''
}

export const keyword: Keyword = {
  id: 0,
  name: '',
  participants: []
}

export const page: Page = {
  id: 0,
  date: '2019-09-19T21:11:36',
  date_gmt: '2019-09-19T21:11:36',
  guid: {
    rendered: 'http://www.bienaldeartesmediales.cl/14/?page_id=356'
  },
  modified: '2019-10-17T15:32:33',
  modified_gmt: '2019-10-17T15:32:33',
  slug: 's',
  status: 'publish',
  type: 'page',
  link: '',
  title: '',
  content: {
    rendered:
      "\n<p>La Bienal de Artes Mediales de Santiago es un encuentro dedicado al cruce entre arte y tecnología. Fundada en 1993 por la Corporación Chilena del Video, constituye una vitrina para la producción nacional e internacional en las áreas audiovisuales y de nuevos medios, fomenta el encuentro entre artistas del rubro y se preocupa por abordar sus desafíos teóricos.</p>\n\n\n\n<p>Desde su creación, la Bienal ha recorrido diversos campos de relación entre artes y ciencias, constituidas por revisiones históricas, reflexiones teóricas y prácticas estéticas. Sus últimas versiones giraron en torno a la relación arte y autogestión (Autonomía, 11BAM), la transformación del lenguaje en el siglo 21 (Hablar en lenguas, 12BAM), y los desastres socionaturales y su relación con la cultura (Temblor, 13BAM). </p>\n\n\n\n<p>Su decimocuarta edición, está dedicada a observar, pensar e imaginar<em> El cuarto mundo</em>, un lugar que nos permite reflexionar sobre la actual relación entre humanos y ecosistema.</p>\n\n\n\n<p style='font-size:34px'><strong>EQUIPO</strong></p>\n\n\n\n<p> Dirección general_  <strong>Enrique Rivera <br> </strong>Dirección ejecutiva_<strong> Catalina Ossa </strong><br> Curatoría general_<strong> Catalina Valdés_ Enrique Rivera</strong><br> Producción general_ <strong>Eugenio González </strong><br> Campos Magnéticos_ <strong>Ana Rosa Ibáñez </strong><br> Coordinación de proyectos_ <strong>Victoria Guzmán </strong><br> Museografía y producción de montaje_ <strong>Florencia Aspèe </strong><br> Arquitectura y diseño_ <strong>Beatriz Palma</strong><br> Investigación curatorial_ <strong>Manuel Alvarado</strong> <br> Asistencia de investigación_ <strong>Daniela Ávila</strong> <br> Escuela de la Intuición_ <strong>Bárbara Chávez_ Claudia Sanhueza </strong><br> Comunicaciones_ <strong>Francisca Gabler </strong><br> Diseño gráfico_ <strong>Lucía Rosselot_ Marco Heredia </strong><br> Producción y desarrollo audiovisual_<strong> Benjamín Matte_ Gabriel Ortega </strong><br> Desarrollo web_ <strong>Bruno Cabezas</strong><br> Administración y logística_ <strong>Graciela Gamboa </strong></p>\n\n\n\n<p></p>\n",
    protected: false
  },
  excerpt: {
    rendered:
      '<p>La Bienal de Artes Mediales de Santiago es un encuentro dedicado al cruce entre arte y tecnología. Fundada en 1993 por la Corporación Chilena del Video, constituye una vitrina para la producción nacional e internacional en las áreas audiovisuales y de nuevos medios, fomenta el encuentro entre artistas del rubro y se preocupa por abordar [&hellip;]</p>\n',
    protected: false
  },
  author: 1,
  featured_media: 0,
  parent: 0,
  menu_order: 0,
  comment_status: 'closed',
  ping_status: 'closed',
  template: '',
  meta: [],
  acf_fields: {
    video: '',
    gallery: [
      {
        ID: 870,
        id: 870,
        title: '13BAM-3 (1)',
        filename: '13BAM-3-1.jpg',
        url:
          'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-3-1.jpg',
        alt: '',
        author: '2',
        description: '',
        caption: '',
        name: '13bam-3-1',
        date: '2019-10-15 15:02:20',
        modified: '2019-10-15 15:10:47',
        mime_type: 'image/jpeg',
        type: 'image',
        icon:
          'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
        width: 5318,
        height: 3550,
        sizes: {
          thumbnail:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-3-1-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-3-1-300x200.jpg',
          'medium-width': 300,
          'medium-height': 200,
          medium_large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-3-1-768x513.jpg',
          'medium_large-width': 768,
          'medium_large-height': 513,
          large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-3-1-1024x684.jpg',
          'large-width': 1024,
          'large-height': 684
        }
      },
      {
        ID: 871,
        id: 871,
        title: '13BAM-4 (1)',
        filename: '13BAM-4-1.jpg',
        url:
          'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-4-1.jpg',
        alt: '',
        author: '2',
        description: '',
        caption: '',
        name: '13bam-4-1',
        date: '2019-10-15 15:03:09',
        modified: '2019-10-15 15:03:09',
        mime_type: 'image/jpeg',
        type: 'image',
        icon:
          'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
        width: 5676,
        height: 3789,
        sizes: {
          thumbnail:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-4-1-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-4-1-300x200.jpg',
          'medium-width': 300,
          'medium-height': 200,
          medium_large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-4-1-768x513.jpg',
          'medium_large-width': 768,
          'medium_large-height': 513,
          large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-4-1-1024x684.jpg',
          'large-width': 1024,
          'large-height': 684
        }
      },
      {
        ID: 872,
        id: 872,
        title: '13BAM-10 (1)',
        filename: '13BAM-10-1.jpg',
        url:
          'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-10-1.jpg',
        alt: '',
        author: '2',
        description: '',
        caption: '',
        name: '13bam-10-1',
        date: '2019-10-15 15:04:50',
        modified: '2019-10-15 15:04:50',
        mime_type: 'image/jpeg',
        type: 'image',
        icon:
          'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
        width: 7220,
        height: 4813,
        sizes: {
          thumbnail:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-10-1-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-10-1-300x200.jpg',
          'medium-width': 300,
          'medium-height': 200,
          medium_large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-10-1-768x512.jpg',
          'medium_large-width': 768,
          'medium_large-height': 512,
          large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-10-1-1024x683.jpg',
          'large-width': 1024,
          'large-height': 683
        }
      },
      {
        ID: 873,
        id: 873,
        title: '13BAM-12 (1)',
        filename: '13BAM-12-1.jpg',
        url:
          'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-12-1.jpg',
        alt: '',
        author: '2',
        description: '',
        caption: '',
        name: '13bam-12-1',
        date: '2019-10-15 15:05:56',
        modified: '2019-10-15 15:05:56',
        mime_type: 'image/jpeg',
        type: 'image',
        icon:
          'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
        width: 2000,
        height: 1335,
        sizes: {
          thumbnail:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-12-1-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-12-1-300x200.jpg',
          'medium-width': 300,
          'medium-height': 200,
          medium_large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-12-1-768x513.jpg',
          'medium_large-width': 768,
          'medium_large-height': 513,
          large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-12-1-1024x684.jpg',
          'large-width': 1024,
          'large-height': 684
        }
      },
      {
        ID: 874,
        id: 874,
        title: '13BAM-18 (1)',
        filename: '13BAM-18-1.jpg',
        url:
          'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-18-1.jpg',
        alt: '',
        author: '2',
        description: '',
        caption: '',
        name: '13bam-18-1',
        date: '2019-10-15 15:06:52',
        modified: '2019-10-15 15:06:52',
        mime_type: 'image/jpeg',
        type: 'image',
        icon:
          'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
        width: 5828,
        height: 2914,
        sizes: {
          thumbnail:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-18-1-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-18-1-300x150.jpg',
          'medium-width': 300,
          'medium-height': 150,
          medium_large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-18-1-768x384.jpg',
          'medium_large-width': 768,
          'medium_large-height': 384,
          large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-18-1-1024x512.jpg',
          'large-width': 1024,
          'large-height': 512
        }
      },
      {
        ID: 875,
        id: 875,
        title: '13BAM-25 (1)',
        filename: '13BAM-25-1.jpg',
        url:
          'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-25-1.jpg',
        alt: '',
        author: '2',
        description: '',
        caption: '',
        name: '13bam-25-1',
        date: '2019-10-15 15:07:55',
        modified: '2019-10-15 15:07:55',
        mime_type: 'image/jpeg',
        type: 'image',
        icon:
          'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
        width: 3973,
        height: 2235,
        sizes: {
          thumbnail:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-25-1-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-25-1-300x169.jpg',
          'medium-width': 300,
          'medium-height': 169,
          medium_large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-25-1-768x432.jpg',
          'medium_large-width': 768,
          'medium_large-height': 432,
          large:
            'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-25-1-1024x576.jpg',
          'large-width': 1024,
          'large-height': 576
        }
      }
    ],
    short_description: '',
    dates: ''
  },
  _links: {
    self: [
      {
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/pages/356'
      }
    ],
    collection: [
      {
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/pages'
      }
    ],
    about: [
      {
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/types/page'
      }
    ],
    author: [
      {
        embeddable: true,
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/users/1'
      }
    ],
    replies: [
      {
        embeddable: true,
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/comments?post=356'
      }
    ],
    'version-history': [
      {
        count: 10,
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/pages/356/revisions'
      }
    ],
    'predecessor-version': [
      {
        id: 1001,
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/pages/356/revisions/1001'
      }
    ],
    'wp:attachment': [
      {
        href:
          'http://www.bienaldeartesmediales.cl/14/index.php/wp-json/wp/v2/media?parent=356'
      }
    ],
    curies: [
      {
        name: 'wp',
        href: 'https://api.w.org/{rel}',
        templated: true
      }
    ]
  },
  video: '__vue_devtool_undefined__',
  abstract: '__vue_devtool_undefined__',
  dates: '__vue_devtool_undefined__',
  gallery: [
    'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-3-1.jpg',
    'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-4-1.jpg',
    'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-10-1.jpg',
    'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-12-1.jpg',
    'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-18-1.jpg',
    'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/13BAM-25-1.jpg'
  ]
}
