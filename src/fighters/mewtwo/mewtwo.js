import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import MewtwoHeadSSBU from './MewtwoHeadSSBU.png';
import MewtwoSSBU from './Mewtwo_SSBU.png';

const mewtwo = {
  name: 'Mewtwo',
  series: pokemonSeries,
  icon: MewtwoHeadSSBU,
  stats: {
    official: {
      weight: 57,
      airSpeed: 98,
      fallSpeed: 74,
      runSpeed: 59,
      dashSpeed: 93,
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
  picture: MewtwoSSBU,
};

export default mewtwo;
