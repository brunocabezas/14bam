export const getVimeoId = (vimeoUrl: string) =>
  vimeoUrl.split('/')[vimeoUrl.split('/').length - 1]

export const getYoutubeId = (ytUrl: string) =>
  ytUrl.split('=')[ytUrl.split('=').length - 1]
