import getUnofficialStats from '../../helpers/getUnofficialStats';
import xenobladeSeries from '../../series/xenobladeSeries/xenobladeSeries';
import ShulkHeadSSBU from './ShulkHeadSSBU.png';
import ShulkSSBU from './Shulk_SSBU.png';

const filename = 'shulk';

const shulk = {
  name: 'Shulk',
  series: xenobladeSeries,
  icon: ShulkHeadSSBU,
  stats: {
    official: {
      weight: 72,
      airSpeed: 83,
      fallSpeed: 75,
      runSpeed: 43,
      dashSpeed: 77,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: ShulkSSBU,
};

export default shulk;
