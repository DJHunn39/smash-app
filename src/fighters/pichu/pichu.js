import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PichuHeadSSBU from './PichuHeadSSBU.png';
import PichuSSBU from './Pichu_SSBU.png';

const pichu = {
  name: 'Pichu',
  series: pokemonSeries,
  icon: PichuHeadSSBU,
  stats: {
    official: {
      weight: 46,
      airSpeed: 77,
      fallSpeed: 90,
      runSpeed: 49,
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
  picture: PichuSSBU,
};

export default pichu;
