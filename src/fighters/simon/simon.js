import castlevaniaSeries from '../../series/castlevaniaSeries/castlevaniaSeries';
import SimonHeadSSBU from './SimonHeadSSBU.png';
import SimonSSBU from './Simon_SSBU.png';

const simon = {
  name: 'Simon',
  series: castlevaniaSeries,
  icon: SimonHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 70,
      fallSpeed: 88,
      runSpeed: 39,
      dashSpeed: 71,
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
  picture: SimonSSBU,
};

export default simon;
