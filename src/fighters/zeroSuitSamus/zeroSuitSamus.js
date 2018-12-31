import getUnofficialStats from '../../helpers/getUnofficialStats';
import metroidSeries from '../../series/metroidSeries/metroidSeries';
import ZeroSuitSamusHeadSSBU from './ZeroSuitSamusHeadSSBU.png';
import ZeroSuitSamusSSBU from './Zero_Suit_Samus_SSBU.png';

const filename = 'zeroSuitSamus';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: ZeroSuitSamusSSBU,
};

export default ZeroSuitSamus;
