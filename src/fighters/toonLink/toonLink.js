import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import ToonLinkHeadSSBU from './ToonLinkHeadSSBU.png';
import ToonLinkSSBU from './Toon_Link_SSBU.png';

const toonLink = {
  name: 'Toon Link',
  series: zeldaSeries,
  icon: ToonLinkHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 78,
      fallSpeed: 66,
      runSpeed: 50,
      dashSpeed: 79,
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
  picture: ToonLinkSSBU,
};

export default toonLink;
