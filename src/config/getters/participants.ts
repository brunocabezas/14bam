import { State, Participants, Participant, Keywords, SingleParticipant } from '../types/types'
import { WPKeyword, WPResponse, WPResponseItem, WpImage, WPPost } from '../types/wordpressTypes'
import { getWPTitle, getAcfField } from '@/helpers/apiHelpers'
import { flatten, onlyUnique } from '@/helpers/arrayHelpers'

const getParticipantsFromApi = (participants: WPResponse): Participants =>
  participants.map((person: WPResponseItem) => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: getWPTitle(person),
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url,
    images: getAcfField(person, 'fotos', []),
    keywords: getAcfField(person, 'palabras_clave', []).map(
      (keyword: WPKeyword) => keyword.name
    )
  }))

export const getParticipants = (state: State): Participants => {
  return getParticipantsFromApi(state.participants.responseData).sort(
    (a: Participant, b: Participant) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    }
  )
}

// Loops trough participantes, getting a list of unique keywords
export const getKeywordsFromParticipants = (participants: Participants) : Keywords => {
  const nestedKeywords: string[][] = participants.map(person =>
    person.keywords.map((keyword: string) => keyword)
  )

  return flatten(nestedKeywords)
    .filter(onlyUnique)
    .map(key => ({
      name: key,
      id: key,
      participants: participants.filter(p => p.keywords.includes(key))
    }))
}

// Using first result of the respose
// This route returns an array, the response could include more posts
export const getParticipantFromApi = (data: WPResponse): SingleParticipant => {
  return Object.assign(
    {},
    {
      id: data[0].id,
      wpId: data[0].id,
      slug: data[0].slug,
      name: getWPTitle(data[0]),
      bio: getAcfField(data[0], 'bio'),
      workTitle: getAcfField(data[0], 'work_title'),
      workDescription: getAcfField(data[0], 'work_text'),
      img: getAcfField(data[0], 'fotos', [{ url: '' }])[0].url,
      // Filtering images with non valid url
      images: getAcfField(data[0], 'fotos', [{ url: '' }])
        .filter((img: WpImage) => img.url)
        .map((img: WpImage) => img.url),
      expo: getAcfField(data[0], 'exposicion', [])[0] || {},
      // Related participants
      related: getAcfField(data[0], 'relacionados', []).map((related: WPPost) => ({
        id: related.ID,
        name: related.post_title,
        slug: related.post_name
      })),
      // Arrays of Strings, keywords
      keywords: getAcfField(data[0], 'palabras_clave', []).map((keyword: WPKeyword) => ({
        id: keyword.term_id,
        name: keyword.name,
        slug: keyword.slug
      }))
    }
  )
}
