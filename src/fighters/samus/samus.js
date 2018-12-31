import getUnofficialStats from '../../helpers/getUnofficialStats';
import metroidSeries from '../../series/metroidSeries/metroidSeries';
import SamusHeadSSBU from './SamusHeadSSBU.png';
import SamusSSBU from './Samus_SSBU.png';

const filename = 'samus';

const samus = {
  name: 'Samus',
  series: metroidSeries,
  icon: SamusHeadSSBU,
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
  picture: SamusSSBU,
};

export default samus;
