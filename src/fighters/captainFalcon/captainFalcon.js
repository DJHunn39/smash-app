import getUnofficialStats from '../../helpers/getUnofficialStats';
import fZeroSeries from '../../series/fZeroSeries/fZeroSeries';
import CaptainFalconHeadSSBU from './CaptainFalconHeadSSBU.png';
import CaptainFalconSSBU from './Captain_Falcon_SSBU.png';

const filename = 'captainFalcon';

const captainFalcon = {
  name: 'Captain Falcon',
  series: fZeroSeries,
  icon: CaptainFalconHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 90,
      fallSpeed: 89,
      runSpeed: 66,
      dashSpeed: 82,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: CaptainFalconSSBU,
};

export default captainFalcon;
