function TicketServiceTest() {
  const tickets = [
    {
      price: 92768,
      carrier: 'EY',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-08-08T15:45:00.000Z',
          stops: ['IST'],
          duration: 815,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-08-28T05:10:00.000Z',
          stops: [],
          duration: 1823,
        },
      ],
    },
    {
      price: 65343,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-08-08T10:11:00.000Z',
          stops: ['KUL'],
          duration: 962,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-08-28T15:34:00.000Z',
          stops: ['SIN'],
          duration: 679,
        },
      ],
    },
    {
      price: 71495,
      carrier: 'TG',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-08-08T04:40:00.000Z',
          stops: [],
          duration: 1811,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-08-28T03:06:00.000Z',
          stops: ['BKK', 'SIN', 'IST'],
          duration: 843,
        },
      ],
    },
  ];

  const ticketsWithIds = tickets.map((ticket) => {
    const id = `${ticket.price}${ticket.segments[0].duration}${ticket.segments[1].date}`;
    return { id, ...ticket };
  });

  return ticketsWithIds;
  // return tickets;
}

export default TicketServiceTest;
