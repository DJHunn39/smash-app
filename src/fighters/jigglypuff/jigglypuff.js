import PokemonSymbol from '../../seriesIcons/PokemonSymbol.svg';
import JigglypuffHeadSSBU from './JigglypuffHeadSSBU.png';
import JigglypuffSSBU from './Jigglypuff_SSBU.png';

const jigglypuff = {
  name: 'Jigglypuff',
  series: {
    icon: PokemonSymbol,
    name: 'Jigglypuff',
  },
  icon: JigglypuffHeadSSBU,
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
  picture: JigglypuffSSBU,
};

export default jigglypuff;
