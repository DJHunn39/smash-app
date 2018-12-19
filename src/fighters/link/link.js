import LinkSymbol from '../seriesIcons/LinkSymbol.svg';
import LinkHeadSSBU from './LinkHeadSSBU.png';
import LinkSSBU from './Link_SSBU.png';

const link = {
  name: 'Link',
  series: {
    icon: ZeldaSymbol,
    name: 'Link',
  },
  icon: LinkHeadSSBU,
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
  picture: LinkSSBU,
};

export default link;
