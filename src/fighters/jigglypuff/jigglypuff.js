import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import JigglypuffHeadSSBU from './JigglypuffHeadSSBU.png';
import JigglypuffSSBU from './Jigglypuff_SSBU.png';

const jigglypuff = {
  name: 'Jigglypuff',
  series: pokemonSeries,
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
  picture: JigglypuffSSBU,
};

export default jigglypuff;
