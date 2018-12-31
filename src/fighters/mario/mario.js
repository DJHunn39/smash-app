import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import MarioHeadSSBU from './MarioHeadSSBU.png';
import MarioSSBU from './Mario_SSBU.png';

const filename = 'mario';

const mario = {
  name: 'Mario',
  series: marioSeries,
  icon: MarioHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 90,
      fallSpeed: 71,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: MarioSSBU,
};

export default mario;
