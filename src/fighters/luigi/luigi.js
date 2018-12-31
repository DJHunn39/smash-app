import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import LuigiHeadSSBU from './LuigiHeadSSBU.png';
import LuigiSSBU from './Luigi_SSBU.png';

const filename = 'luigi';

const luigi = {
  name: 'Luigi',
  series: marioSeries,
  icon: LuigiHeadSSBU,
  stats: {
    official: {
      weight: 72,
      airSpeed: 57,
      fallSpeed: 63,
      runSpeed: 43,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: LuigiSSBU,
};

export default luigi;
