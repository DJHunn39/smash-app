import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import SquirtleHeadSSBU from './SquirtleHeadSSBU.png';
import SquirtleSSBU from './Squirtle_SSBU.png';

const squirtle = {
  name: 'Squirtle',
  series: pokemonSeries,
  icon: SquirtleHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: SquirtleSSBU,
};

export default squirtle;
