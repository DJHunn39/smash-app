import getUnofficialStats from '../../helpers/getUnofficialStats';
import kirbySeries from '../../series/kirbySeries/kirbySeries';
import MetaKnightHeadSSBU from './MetaKnightHeadSSBU.png';
import MetaKnightSSBU from './Meta_Knight_SSBU.png';

const filename = 'metaKnight';

const metaKnight = {
  name: 'Meta Knight',
  series: kirbySeries,
  icon: MetaKnightHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 77,
      fallSpeed: 79,
      runSpeed: 54,
      dashSpeed: 91,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: MetaKnightSSBU,
};

export default metaKnight;
