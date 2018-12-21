import marioSeries from '../../series/marioSeries/marioSeries';
import LuigiHeadSSBU from './LuigiHeadSSBU.png';
import LuigiSSBU from './Luigi_SSBU.png';

const luigi = {
  name: 'Luigi',
  series: marioSeries,
  icon: LuigiHeadSSBU,
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
  picture: LuigiSSBU,
};

export default luigi;
