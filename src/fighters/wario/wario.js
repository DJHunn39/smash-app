import WarioSymbol from '../seriesIcons/WarioSymbol.svg';
import WarioHeadSSBU from './WarioHeadSSBU.png';
import WarioSSBU from './Wario_SSBU.png';

const wario = {
  name: 'Wario',
  series: {
    icon: WarioSymbol,
    name: 'Wario',
  },
  icon: WarioHeadSSBU,
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
  picture: WarioSSBU,
};

export default wario;
