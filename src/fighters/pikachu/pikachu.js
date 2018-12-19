import PikachuSymbol from '../../seriesIcons/PikachuSymbol.svg';
import PikachuHeadSSBU from './PikachuHeadSSBU.png';
import PikachuSSBU from './Pikachu_SSBU.png';

const pikachu = {
  name: 'Pikachu',
  series: {
    icon: PokemonSymbol,
    name: 'Pikachu',
  },
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
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: PikachuSSBU,
};

export default pikachu;
