import { Event } from '@/config/types/types'

// Add leading zeros to single numbers
const addZeros = (number: number): string => ('0' + number).slice(-2)

const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const getTimeOfDateTimeString = (dateStr: string = ''): string => {
  if (!dateStr) {
    return dateStr
  }

  const date = new Date(dateStr)
  return `${addZeros(date.getHours())}:${addZeros(date.getMinutes())}`
}

export const getDayOfDateTimeString = (dateStr: string = ''): string => {
  if (!dateStr) {
    return dateStr
  }

  const date = new Date(dateStr)
  return `${addZeros(date.getDate())}`
}

export const getMonthOfDateTimeString = (dateStr: string = '') : string=> {
  if (!dateStr) {
    return dateStr
  }

  const date = new Date(dateStr)
  return monthNames[date.getMonth()]
}

export const isValidDate = (d: any) : boolean => {
  return d instanceof Date
}

export const sortEventsByDate = (a: Event, b: Event) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.start.dateTime).valueOf() - new Date(b.start.dateTime).valueOf()
}

// dateStringToDate
// receives date string as
// 12 de noviembre
// 12 de Moviembre
// 12 Noviembre
// 12 noviembre
// and outputs the corresponding javascript date objects
export const dateStringToDate = (dateString: string) : Date=> {
  if (!dateString) return new Date()

  const day = dateString.split(' ')[0]
  const month = dateString
    .split(' ')[dateString.split(' ').length - 1].toLowerCase()
  const inMonthNames = monthNames.findIndex(m => m.toLowerCase() === month)
  const jsDate = new Date()
  if (!day || !inMonthNames) {
    return new Date()
  }

  jsDate.setDate(parseInt(day, 10))
  jsDate.setMonth(inMonthNames)

  return jsDate
}

// Receives array of dates, and returns the closer to today
const today = new Date()
export const findCloseToToday = (a: Date, b: Date) =>
  Math.abs(a.valueOf() - today.valueOf()) < Math.abs(b.valueOf() - today.valueOf()) ? a : b
