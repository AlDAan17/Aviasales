function calculateStops(stops) {
  if (stops.length === 0) return 'БЕЗ ПЕРЕСАДОК';
  if (stops.length === 1) return '1 ПЕРЕСАДКА';
  if (stops.length < 5) return `${stops.length} ПЕРЕСАДКИ`;
  return `${stops.length} ПЕРЕСАДОК`;
}

export default calculateStops;
