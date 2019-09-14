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

export const sortByDate = (a, b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.start.dateTime) - new Date(b.start.dateTime)
}

// Receives array of dates, and returns the closer to today
const today = new Date()
export const findCloseToToday = (a, b) =>
  Math.abs(a - today) < Math.abs(b - today) ? a : b
