import ZeldaSymbol from '../../seriesIcons/ZeldaSymbol.svg';
import YoungLinkHeadSSBU from './YoungLinkHeadSSBU.png';
import YoungLinkSSBU from './Young_Link_SSBU.png';

const youngLink = {
  name: 'YoungLink',
  series: {
    icon: ZeldaSymbol,
    name: 'The Legend of Zelda',
  },
  icon: YoungLinkHeadSSBU,
  stats: {
    official: {
      weight: 65,
      airSpeed: 72,
      fallSpeed: 86,
      runSpeed: 45,
      dashSpeed: 86,
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
  picture: YoungLinkSSBU,
};

export default youngLink;
