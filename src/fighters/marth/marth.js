import MarthSymbol from '../seriesIcons/MarthSymbol.svg';
import MarthHeadSSBU from './MarthHeadSSBU.png';
import MarthSSBU from './Marth_SSBU.png';

const marth = {
  name: 'Marth',
  series: {
    icon: FireEmblemSymbol,
    name: 'Marth',
  },
  icon: MarthHeadSSBU,
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
  picture: MarthSSBU,
};

export default marth;
