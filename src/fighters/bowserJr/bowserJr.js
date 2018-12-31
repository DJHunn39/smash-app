import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import BowserJrHeadSSBU from './BowserJrHeadSSBU.png';
import BowserJrSSBU from './BowserJr_SSBU.png';

const filename = 'bowserJr';

const bowserJr = {
  name: 'BowserJr',
  series: marioSeries,
  icon: BowserJrHeadSSBU,
  stats: {
    official: {
      weight: 80,
      airSpeed: 84,
      fallSpeed: 79,
      runSpeed: 41,
      dashSpeed: 72,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: BowserJrSSBU,
};

export default bowserJr;
