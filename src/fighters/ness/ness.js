import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import NessHeadSSBU from './NessHeadSSBU.png';
import NessSSBU from './Ness_SSBU.png';

const ness = {
  name: 'Ness',
  series: earthboundSeries,
  icon: NessHeadSSBU,
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
  picture: NessSSBU,
};

export default ness;
