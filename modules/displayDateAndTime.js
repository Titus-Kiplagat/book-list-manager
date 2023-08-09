import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const getCurrentDateTime = () => {
  const currentDate = DateTime.local();
  const date = {
    year: currentDate.year,
    month: currentDate.monthLong,
    day: currentDate.day,
    hour: currentDate.hour > 12 ? currentDate.hour - 12 : currentDate.hour,
    minute: currentDate.minute.toString().padStart(2, '0'),
    second: currentDate.second.toString().padStart(2, '0'),
    amPm: currentDate.hour >= 12 ? 'PM' : 'AM',
  };
  return date;
};
const getOrdinalSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};
const formatDateTime = (date) => {
  const dayOrdinal = getOrdinalSuffix(date.day);
  return `${date.month} ${dayOrdinal} ${date.year}, ${date.hour}:${date.minute}:${date.second} ${date.amPm}`;
};
const displayDateAndTime = () => {
  const dateDiv = document.querySelector('.date');
  const currentDateTime = getCurrentDateTime();
  const formattedDateTime = formatDateTime(currentDateTime);
  dateDiv.textContent = formattedDateTime;
};
export default displayDateAndTime;
