import getUnofficialStats from '../../helpers/getUnofficialStats';
import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KirbyHeadSSBU from './KirbyHeadSSBU.png';
import KirbySSBU from './Kirby_SSBU.png';

const filename = 'kirby';

const kirby = {
  name: 'Kirby',
  series: kirbySeries,
  icon: KirbyHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 63,
      fallSpeed: 59,
      runSpeed: 45,
      dashSpeed: 79,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: KirbySSBU,
};

export default kirby;
