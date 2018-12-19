import XenobladeSymbol from '../../seriesIcons/XenobladeSymbol.svg';
import ShulkHeadSSBU from './ShulkHeadSSBU.png';
import ShulkSSBU from './Shulk_SSBU.png';

const shulk = {
  name: 'Shulk',
  series: {
    icon: XenobladeSymbol,
    name: 'Shulk',
  },
  icon: ShulkHeadSSBU,
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
  picture: ShulkSSBU,
};

export default shulk;
