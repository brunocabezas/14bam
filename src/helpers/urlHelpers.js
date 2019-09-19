export const getVimeoId = vimeoUrl =>
  vimeoUrl.split('/')[vimeoUrl.split('/').length - 1]

export const getYoutubeId = ytUrl =>
  ytUrl.split('=')[ytUrl.split('=').length - 1]
