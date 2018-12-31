import getUnofficialStats from '../../helpers/getUnofficialStats';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import ZeldaHeadSSBU from './ZeldaHeadSSBU.png';
import ZeldaSSBU from './Zelda_SSBU.png';

const filename = 'zelda';

const zelda = {
  name: 'Zelda',
  series: zeldaSeries,
  icon: ZeldaHeadSSBU,
  stats: {
    official: {
      weight: 63,
      airSpeed: 81,
      fallSpeed: 64,
      runSpeed: 37,
      dashSpeed: 81,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: ZeldaSSBU,
};

export default zelda;
