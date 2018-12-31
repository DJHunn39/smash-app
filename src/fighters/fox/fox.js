import getUnofficialStats from '../../helpers/getUnofficialStats';
import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import FoxHeadSSBU from './FoxHeadSSBU.png';
import FoxSSBU from './Fox_SSBU.png';

const filename = 'fox';

const fox = {
  name: 'Fox',
  series: starFoxSeries,
  icon: FoxHeadSSBU,
  stats: {
    official: {
      weight: 57,
      airSpeed: 83,
      fallSpeed: 100,
      runSpeed: 62,
      dashSpeed: 86,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: FoxSSBU,
};

export default fox;
