import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PikachuHeadSSBU from './PikachuHeadSSBU.png';
import PikachuSSBU from './Pikachu_SSBU.png';

const pikachu = {
  name: 'Pikachu',
  series: pokemonSeries,
  icon: PikachuHeadSSBU,
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
  picture: PikachuSSBU,
};

export default pikachu;
