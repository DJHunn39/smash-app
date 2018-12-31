import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiBrawlerHeadSSBU from './MiiBrawlerHeadSSBU.png';
import MiiBrawlerSSBU from './Mii_Brawler_SSBU.png';

const miiBrawler = {
  name: 'Mii Brawler',
  series: smashBrosSeries,
  icon: MiiBrawlerHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 86,
      fallSpeed: 91,
      runSpeed: 50,
      dashSpeed: 77,
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
  picture: MiiBrawlerSSBU,
};

export default miiBrawler;
