import PacManSymbol from '../seriesIcons/PacManSymbol.svg';
import PacManHeadSSBU from './Pac-ManHeadSSBU.png';
import PacManSSBU from './Pac_Man_SSBU.png';

const pacMan = {
  name: 'PacMan',
  series: {
    icon: PacManSymbol,
    name: 'PacMan',
  },
  icon: PacManHeadSSBU,
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
  picture: PacManSSBU,
};

export default pacMan;
