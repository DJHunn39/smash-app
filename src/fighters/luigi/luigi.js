import LuigiSymbol from '../seriesIcons/LuigiSymbol.svg';
import LuigiHeadSSBU from './LuigiHeadSSBU.png';
import LuigiSSBU from './Luigi_SSBU.png';

const luigi = {
  name: 'Luigi',
  series: {
    icon: MarioSymbol,
    name: 'Luigi',
  },
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
  picture: LuigiSSBU,
};

export default luigi;
