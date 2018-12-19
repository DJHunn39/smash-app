import ZeroSuitSamusSymbol from '../seriesIcons/ZeroSuitSamusSymbol.svg';
import ZeroSuitSamusHeadSSBU from './ZeroSuitSamusHeadSSBU.png';
import ZeroSuitSamusSSBU from './ZeroSuitSamus_SSBU.png';

const ZeroSuitSamus = {
  name: 'ZeroSuitSamus',
  series: {
    icon: MetroidSymbol,
    name: 'ZeroSuitSamus',
  },
  icon: ZeroSuitSamusHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 94,
      fallSpeed: 81,
      runSpeed: 60,
      dashSpeed: 100,
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
  picture: ZeroSuitSamusSSBU,
};

export default ZeroSuitSamus;
