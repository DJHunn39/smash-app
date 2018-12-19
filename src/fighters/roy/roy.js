import FireEmblemSymbol from '../../seriesIcons/FireEmblemSymbol.svg';
import RoyHeadSSBU from './RoyHeadSSBU.png';
import RoySSBU from './Roy_SSBU.png';

const roy = {
  name: 'Roy',
  series: {
    icon: FireEmblemSymbol,
    name: 'Roy',
  },
  icon: RoyHeadSSBU,
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
  picture: RoySSBU,
};

export default roy;
