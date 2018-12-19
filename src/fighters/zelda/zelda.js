import ZeldaSymbol from '../seriesIcons/ZeldaSymbol.svg';
import ZeldaHeadSSBU from './ZeldaHeadSSBU.png';
import ZeldaSSBU from './Zelda_SSBU.png';

const zelda = {
  name: 'Zelda',
  series: {
    icon: ZeldaSymbol,
    name: 'Zelda',
  },
  icon: ZeldaHeadSSBU,
  stats: {
    official: {
      weight: 63,
      airSpeed: 81,
      fallSpeed: 64,
      runSpeed: 37,
      dashSpeed: 81,
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
  picture: ZeldaSSBU,
};

export default zelda;
