function addZero(element) {
  if (String(element).length === 1) return `0${element}`;
  return element;
}

function travelTime(date, duration) {
  const dateFrom = new Date(date);
  const hoursFrom = dateFrom.getUTCHours();
  const minsFrom = dateFrom.getUTCMinutes();

  const dateIn = new Date(dateFrom.getTime() + duration * 60 * 1000);
  const hoursIn = dateIn.getUTCHours();
  const minsIn = dateIn.getUTCMinutes();

  return `${addZero(hoursFrom)}:${addZero(minsFrom)} - ${addZero(hoursIn)}:${addZero(minsIn)}`;
}

export default travelTime;
