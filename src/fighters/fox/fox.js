import FoxSymbol from '../../seriesIcons/FoxSymbol.svg';
import FoxHeadSSBU from './FoxHeadSSBU.png';
import FoxSSBU from './Fox_SSBU.png';

const fox = {
  name: 'Fox',
  series: {
    icon: StarFoxSymbol,
    name: 'Fox',
  },
  icon: FoxHeadSSBU,
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
  picture: FoxSSBU,
};

export default fox;
