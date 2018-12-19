import MiiBrawlerSymbol from '../../seriesIcons/MiiBrawlerSymbol.svg';
import MiiBrawlerHeadSSBU from './MiiBrawlerHeadSSBU.png';
import MiiBrawlerSSBU from './Mii_Brawler_SSBU.png';

const miiBrawler = {
  name: 'MiiBrawler',
  series: {
    icon: SmashBrosSymbol,
    name: 'MiiBrawler',
  },
  icon: MiiBrawlerHeadSSBU,
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
  picture: MiiBrawlerSSBU,
};

export default miiBrawler;
