import BowserJrSymbol from '../seriesIcons/BowserJrSymbol.svg';
import BowserJrHeadSSBU from './BowserJrHeadSSBU.png';
import BowserJrSSBU from './Bowser_Jr_SSBU.png';

const bowserJr = {
  name: 'BowserJr',
  series: {
    icon: MarioSymbol,
    name: 'BowserJr',
  },
  icon: BowserJrHeadSSBU,
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
  picture: BowserJrSSBU,
};

export default bowserJr;
