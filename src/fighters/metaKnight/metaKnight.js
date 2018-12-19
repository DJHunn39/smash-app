import MetaKnightSymbol from '../seriesIcons/MetaKnightSymbol.svg';
import MetaKnightHeadSSBU from './MetaKnightHeadSSBU.png';
import MetaKnightSSBU from './Meta_Knight_SSBU.png';

const metaKnight = {
  name: 'MetaKnight',
  series: {
    icon: KirbySymbol,
    name: 'MetaKnight',
  },
  icon: MetaKnightHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: MetaKnightSSBU,
};

export default metaKnight;
