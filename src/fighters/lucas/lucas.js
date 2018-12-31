import getUnofficialStats from '../../helpers/getUnofficialStats';
import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import LucasHeadSSBU from './LucasHeadSSBU.png';
import LucasSSBU from './Lucas_SSBU.png';

const filename = 'lucas';

const lucas = {
  name: 'Lucas',
  series: earthboundSeries,
  icon: LucasHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 86,
      fallSpeed: 65,
      runSpeed: 43,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: LucasSSBU,
};

export default lucas;
