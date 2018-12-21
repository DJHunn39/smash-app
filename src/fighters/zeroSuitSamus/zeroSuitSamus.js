import metroidSeries from '../../series/metroidSeries/metroidSeries';
import ZeroSuitSamusHeadSSBU from './ZeroSuitSamusHeadSSBU.png';
import ZeroSuitSamusSSBU from './Zero_Suit_Samus_SSBU.png';

const ZeroSuitSamus = {
  name: 'Zero Suit Samus',
  series: metroidSeries,
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
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: ZeroSuitSamusSSBU,
};

export default ZeroSuitSamus;
