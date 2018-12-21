import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import LucasHeadSSBU from './LucasHeadSSBU.png';
import LucasSSBU from './Lucas_SSBU.png';

const lucas = {
  name: 'Lucas',
  series: earthboundSeries,
  icon: LucasHeadSSBU,
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
  picture: LucasSSBU,
};

export default lucas;
