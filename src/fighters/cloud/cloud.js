import getUnofficialStats from '../../helpers/getUnofficialStats';
import finalFantasySeries from '../../series/finalFantasySeries/finalFantasySeries';
import CloudHeadSSBU from './CloudHeadSSBU.png';
import CloudSSBU from './Cloud_SSBU.png';

const filename = 'cloud';

const cloud = {
  name: 'Cloud',
  series: finalFantasySeries,
  icon: CloudHeadSSBU,
  stats: {
    official: {
      weight: 74,
      airSpeed: 86,
      fallSpeed: 80,
      runSpeed: 56,
      dashSpeed: 89,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: CloudSSBU,
};

export default cloud;
