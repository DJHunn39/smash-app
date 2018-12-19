import MarioSymbol from '../../seriesIcons/MarioSymbol.svg';
import BowserHeadSSBU from './BowserHeadSSBU.png';
import BowserSSBU from './Bowser_SSBU.png';

const bowser = {
  name: 'Bowser',
  series: {
    icon: MarioSymbol,
    name: 'Bowser',
  },
  icon: BowserHeadSSBU,
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
  picture: BowserSSBU,
};

export default bowser;
