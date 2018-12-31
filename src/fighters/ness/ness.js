import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import NessHeadSSBU from './NessHeadSSBU.png';
import NessSSBU from './Ness_SSBU.png';

const ness = {
  name: 'Ness',
  series: earthboundSeries,
  icon: NessHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 75,
      fallSpeed: 62,
      runSpeed: 42,
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
  picture: NessSSBU,
};

export default ness;
