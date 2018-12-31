import kirbySeries from '../../series/kirbySeries/kirbySeries';
import MetaKnightHeadSSBU from './MetaKnightHeadSSBU.png';
import MetaKnightSSBU from './Meta_Knight_SSBU.png';

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
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: MetaKnightSSBU,
};

export default metaKnight;
