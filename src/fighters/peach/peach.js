import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import PeachHeadSSBU from './PeachHeadSSBU.png';
import PeachSSBU from './Peach_SSBU.png';

const filename = 'peach';

const peach = {
  name: 'Peach',
  series: marioSeries,
  icon: PeachHeadSSBU,
  stats: {
    official: {
      weight: 66,
      airSpeed: 77,
      fallSpeed: 57,
      runSpeed: 41,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: PeachSSBU,
};

export default peach;
