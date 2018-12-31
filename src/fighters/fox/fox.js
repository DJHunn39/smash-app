import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import FoxHeadSSBU from './FoxHeadSSBU.png';
import FoxSSBU from './Fox_SSBU.png';

const fox = {
  name: 'Fox',
  series: starFoxSeries,
  icon: FoxHeadSSBU,
  stats: {
    official: {
      weight: 57,
      airSpeed: 83,
      fallSpeed: 100,
      runSpeed: 62,
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
  picture: FoxSSBU,
};

export default fox;
