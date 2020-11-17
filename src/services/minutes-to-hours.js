function minutesToHours(min) {
  return `${Math.floor(min / 60)}ч ${min % 60}м`;
}

export default minutesToHours;