import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: MiiBrawlerSSBU,
};

export default miiBrawler;
