// Add leading zeros to single numbers
const addZeros = number => ('0' + number).slice(-2)

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const getTimeOfDateTimeString = (dateStr = '') => {
  if (!dateStr) { return dateStr }

  const date = new Date(dateStr)
  return `${addZeros(date.getHours())}:${addZeros(date.getMinutes())}`
}

export const getDayOfDateTimeString = (dateStr = '') => {
  if (!dateStr) { return dateStr }

  const date = new Date(dateStr)
  return `${addZeros(date.getDate())}`
}

export const getMonthOfDateTimeString = (dateStr = '') => {
  if (!dateStr) { return dateStr }

  const date = new Date(dateStr)
  return monthNames[date.getMonth()]
}
