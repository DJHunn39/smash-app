import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import WolfHeadSSBU from './WolfHeadSSBU.png';
import WolfSSBU from './Wolf_SSBU.png';

const wolf = {
  name: 'Wolf',
  series: starFoxSeries,
  icon: WolfHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 95,
      fallSpeed: 86,
      runSpeed: 40,
      dashSpeed: 86,
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
  picture: WolfSSBU,
};

export default wolf;
