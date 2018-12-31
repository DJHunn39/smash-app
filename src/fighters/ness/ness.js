import getUnofficialStats from '../../helpers/getUnofficialStats';
import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import NessHeadSSBU from './NessHeadSSBU.png';
import NessSSBU from './Ness_SSBU.png';

const filename = 'ness';

const ness = {
  name: 'Ness',
  series: earthboundSeries,
  icon: NessHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 75,
      fallSpeed: 62,
      runSpeed: 42,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: NessSSBU,
};

export default ness;
