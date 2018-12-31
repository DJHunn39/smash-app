import getUnofficialStats from '../../helpers/getUnofficialStats';
import metroidSeries from '../../series/metroidSeries/metroidSeries';
import DarkSamusHeadSSBU from './DarkSamusHeadSSBU.png';
import DarkSamusSSBU from './Dark_Samus_SSBU.png';

const filename = 'darkSamus';

const darkSamus = {
  name: 'Dark Samus',
  series: metroidSeries,
  icon: DarkSamusHeadSSBU,
  stats: {
    official: {
      weight: 80,
      airSpeed: 82,
      fallSpeed: 63,
      runSpeed: 43,
      dashSpeed: 77,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: DarkSamusSSBU,
};

export default darkSamus;
