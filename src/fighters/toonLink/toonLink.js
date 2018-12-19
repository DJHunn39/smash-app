import ZeldaSymbol from '../../seriesIcons/ZeldaSymbol.svg';
import ToonLinkHeadSSBU from './ToonLinkHeadSSBU.png';
import ToonLinkSSBU from './Toon_Link_SSBU.png';

const toonLink = {
  name: 'ToonLink',
  series: {
    icon: ZeldaSymbol,
    name: 'ToonLink',
  },
  icon: ToonLinkHeadSSBU,
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
  picture: ToonLinkSSBU,
};

export default toonLink;
