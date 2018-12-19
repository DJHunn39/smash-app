import FireEmblemSymbol from '../../seriesIcons/FireEmblemSymbol.svg';
import CorrinHeadSSBU from './CorrinHeadSSBU.png';
import CorrinSSBU from './Corrin_SSBU.png';

const corrin = {
  name: 'Corrin',
  series: {
    icon: FireEmblemSymbol,
    name: 'Corrin',
  },
  icon: CorrinHeadSSBU,
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
  picture: CorrinSSBU,
};

export default corrin;
