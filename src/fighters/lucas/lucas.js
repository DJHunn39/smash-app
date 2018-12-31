import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import LucasHeadSSBU from './LucasHeadSSBU.png';
import LucasSSBU from './Lucas_SSBU.png';

const lucas = {
  name: 'Lucas',
  series: earthboundSeries,
  icon: LucasHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 86,
      fallSpeed: 65,
      runSpeed: 43,
      dashSpeed: 75,
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
  picture: LucasSSBU,
};

export default lucas;
