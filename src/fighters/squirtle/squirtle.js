import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import SquirtleHeadSSBU from './SquirtleHeadSSBU.png';
import SquirtleSSBU from './Squirtle_SSBU.png';

const squirtle = {
  name: 'Squirtle',
  series: pokemonSeries,
  icon: SquirtleHeadSSBU,
  stats: {
    official: {
      weight: 56,
      airSpeed: 75,
      fallSpeed: 64,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      danny: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: SquirtleSSBU,
};

export default squirtle;
