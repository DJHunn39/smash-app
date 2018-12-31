import getUnofficialStats from '../../helpers/getUnofficialStats';
import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiBrawlerHeadSSBU from './MiiBrawlerHeadSSBU.png';
import MiiBrawlerSSBU from './Mii_Brawler_SSBU.png';

const filename = 'miiBrawler';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: MiiBrawlerSSBU,
};

export default miiBrawler;
