import DarkSamusSymbol from '../seriesIcons/DarkSamusSymbol.svg';
import DarkSamusHeadSSBU from './DarkSamusHeadSSBU.png';
import DarkSamusSSBU from './Dark_Samus_SSBU.png';

const darkSamus = {
  name: 'DarkSamus',
  series: {
    icon: MetroidSymbol,
    name: 'DarkSamus',
  },
  icon: DarkSamusHeadSSBU,
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
  picture: DarkSamusSSBU,
};

export default darkSamus;
