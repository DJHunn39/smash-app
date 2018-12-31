import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import RobinHeadSSBU from './RobinHeadSSBU.png';
import RobinSSBU from './Robin_SSBU.png';

const filename = 'robin';

const robin = {
  name: 'Robin',
  series: fireEmblemSeries,
  icon: RobinHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 78,
      fallSpeed: 71,
      runSpeed: 33,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RobinSSBU,
};

export default robin;
