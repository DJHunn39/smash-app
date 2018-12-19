import MegaManSymbol from '../../seriesIcons/MegaManSymbol.svg';
import MegaManHeadSSBU from './MegaManHeadSSBU.png';
import MegaManSSBU from './Mega_Man_SSBU.png';

const megaMan = {
  name: 'MegaMan',
  series: {
    icon: MegaManSymbol,
    name: 'MegaMan',
  },
  icon: MegaManHeadSSBU,
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
  picture: MegaManSSBU,
};

export default megaMan;
