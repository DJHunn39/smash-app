import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import IkeHeadSSBU from './IkeHeadSSBU.png';
import IkeSSBU from './Ike_SSBU.png';

const filename = 'ike';

const ike = {
  name: 'Ike',
  series: fireEmblemSeries,
  icon: IkeHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 84,
      fallSpeed: 79,
      runSpeed: 39,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: IkeSSBU,
};

export default ike;
