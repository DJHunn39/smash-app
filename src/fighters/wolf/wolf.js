import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import WolfHeadSSBU from './WolfHeadSSBU.png';
import WolfSSBU from './Wolf_SSBU.png';

const wolf = {
  name: 'Wolf',
  series: starFoxSeries,
  icon: WolfHeadSSBU,
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
  picture: WolfSSBU,
};

export default wolf;
