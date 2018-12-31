import getUnofficialStats from '../../helpers/getUnofficialStats';
import robSeries from '../../series/robSeries/robSeries';
import RobHeadSSBU from './ROBHeadSSBU.png';
import RobSSBU from './R_O_B_SSBU.png';

const filename = 'rob';

const rob = {
  name: 'Rob',
  series: robSeries,
  icon: RobHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 84,
      fallSpeed: 76,
      runSpeed: 45,
      dashSpeed: 83,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RobSSBU,
};

export default rob;
