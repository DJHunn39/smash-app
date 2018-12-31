import getUnofficialStats from '../../helpers/getUnofficialStats';
import punchOutSeries from '../../series/punchOutSeries/punchOutSeries';
import LittleMacHeadSSBU from './LittleMacHeadSSBU.png';
import LittleMacSSBU from './Little_Mac_SSBU.png';

const filename = 'littleMac';

const littleMac = {
  name: 'Little Mac',
  series: punchOutSeries,
  icon: LittleMacHeadSSBU,
  stats: {
    official: {
      weight: 64,
      airSpeed: 90,
      fallSpeed: 93,
      runSpeed: 64,
      dashSpeed: 98,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: LittleMacSSBU,
};

export default littleMac;
