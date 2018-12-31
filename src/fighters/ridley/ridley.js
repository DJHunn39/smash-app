import getUnofficialStats from '../../helpers/getUnofficialStats';
import metroidSeries from '../../series/metroidSeries/metroidSeries';
import RidleyHeadSSBU from './RidleyHeadSSBU.png';
import RidleySSBU from './Ridley_SSBU.png';

const filename = 'ridley';

const ridley = {
  name: 'Ridley',
  series: metroidSeries,
  icon: RidleyHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 78,
      fallSpeed: 85,
      runSpeed: 57,
      dashSpeed: 74,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RidleySSBU,
};

export default ridley;
