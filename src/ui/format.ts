/**
 * Format a date-ish object to a locale-friendly string
 */
export function formatDate(
  date?: Date | string | number,
  defaultValue: string = ''
) {
  if (!date) {
    return defaultValue
  }
  // https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatTime(date: Date | string | number) {
  return new Date(date).toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  })
}
