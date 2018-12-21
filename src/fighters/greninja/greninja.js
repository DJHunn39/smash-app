import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import GreninjaHeadSSBU from './GreninjaHeadSSBU.png';
import GreninjaSSBU from './Greninja_SSBU.png';

const greninja = {
  name: 'Greninja',
  series: pokemonSeries,
  icon: GreninjaHeadSSBU,
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
  picture: GreninjaSSBU,
};

export default greninja;
