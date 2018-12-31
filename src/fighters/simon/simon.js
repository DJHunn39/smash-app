import getUnofficialStats from '../../helpers/getUnofficialStats';
import castlevaniaSeries from '../../series/castlevaniaSeries/castlevaniaSeries';
import SimonHeadSSBU from './SimonHeadSSBU.png';
import SimonSSBU from './Simon_SSBU.png';

const filename = 'simon';

const simon = {
  name: 'Simon',
  series: castlevaniaSeries,
  icon: SimonHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 70,
      fallSpeed: 88,
      runSpeed: 39,
      dashSpeed: 71,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: SimonSSBU,
};

export default simon;
