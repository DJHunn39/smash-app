import getUnofficialStats from '../../helpers/getUnofficialStats';
import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import WolfHeadSSBU from './WolfHeadSSBU.png';
import WolfSSBU from './Wolf_SSBU.png';

const filename = 'wolf';

const wolf = {
  name: 'Wolf',
  series: starFoxSeries,
  icon: WolfHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 95,
      fallSpeed: 86,
      runSpeed: 40,
      dashSpeed: 86,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: WolfSSBU,
};

export default wolf;
