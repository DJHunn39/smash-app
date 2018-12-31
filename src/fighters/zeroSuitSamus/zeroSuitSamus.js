import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: ZeroSuitSamusSSBU,
};

export default ZeroSuitSamus;
