import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PikachuHeadSSBU from './PikachuHeadSSBU.png';
import PikachuSSBU from './Pikachu_SSBU.png';

const pikachu = {
  name: 'Pikachu',
  series: pokemonSeries,
  icon: PikachuHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 71,
      fallSpeed: 74,
      runSpeed: 53,
      dashSpeed: 82,
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
  picture: PikachuSSBU,
};

export default pikachu;
