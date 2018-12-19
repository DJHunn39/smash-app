import PokemonSymbol from '../../seriesIcons/PokemonSymbol.svg';
import PichuHeadSSBU from './PichuHeadSSBU.png';
import PichuSSBU from './Pichu_SSBU.png';

const pichu = {
  name: 'Pichu',
  series: {
    icon: PokemonSymbol,
    name: 'Pichu',
  },
  icon: PichuHeadSSBU,
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
  picture: PichuSSBU,
};

export default pichu;
