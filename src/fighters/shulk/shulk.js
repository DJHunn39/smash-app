import xenobladeSeries from '../../series/xenobladeSeries/xenobladeSeries';
import ShulkHeadSSBU from './ShulkHeadSSBU.png';
import ShulkSSBU from './Shulk_SSBU.png';

const shulk = {
  name: 'Shulk',
  series: xenobladeSeries,
  icon: ShulkHeadSSBU,
  stats: {
    official: {
      weight: 72,
      airSpeed: 83,
      fallSpeed: 75,
      runSpeed: 43,
      dashSpeed: 77,
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
  picture: ShulkSSBU,
};

export default shulk;
