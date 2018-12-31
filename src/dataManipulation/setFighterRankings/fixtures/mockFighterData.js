const mockFighterData = [
  {
    name: 'A',
    stats: {
      official: {
        weight: 50,
        airSpeed: 90,
        fallSpeed: 50,
        runSpeed: 70,
        dashSpeed: 40,
      },
      unofficial: {
        danny: {
          fun: 10,
          power: 20,
          nostalgia: 30,
          recovery: 40,
          final: 50,
        },
        jack: {
          fun: 10,
          power: 20,
          nostalgia: 30,
          recovery: 40,
          final: 50,
        }
      },
    },
  },
  {
    name: 'B',
    stats: {
      official: {
        weight: 50,
        airSpeed: 80,
        fallSpeed: 60,
        runSpeed: 60,
        dashSpeed: 30,
      },
      unofficial: {
        danny: {
          fun: 20,
          power: 30,
          nostalgia: 40,
          recovery: 50,
          final: 60,
        },
        jack: {
          fun: getUnofficialStat('danny', 'fun', filename),
          power: 10,
          nostalgia: 20,
          recovery: 30,
          final: 40,
        }
      },
    },
  }
];

export default mockFighterData;
