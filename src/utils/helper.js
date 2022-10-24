/**
 * Function to get date string and return day of that date
 * @param {*} dateString string
 * @returns string
 */
export function getDay(dateString) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(dateString);
  const dayName = days[d.getDay()];

  return dayName;
}
