import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import RoyHeadSSBU from './RoyHeadSSBU.png';
import RoySSBU from './Roy_SSBU.png';

const filename = 'roy';

const roy = {
  name: 'Roy',
  series: fireEmblemSeries,
  icon: RoyHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 97,
      fallSpeed: 86,
      runSpeed: 56,
      dashSpeed: 91,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RoySSBU,
};

export default roy;
