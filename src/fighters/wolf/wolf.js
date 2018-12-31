import getUnofficialStat from '../../helpers/getUnofficialStat';
import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import WolfHeadSSBU from './WolfHeadSSBU.png';
import WolfSSBU from './Wolf_SSBU.png';

const wolf = {
  name: 'Wolf',
  series: starFoxSeries,
  icon: WolfHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 95,
      fallSpeed: 86,
      runSpeed: 40,
      dashSpeed: 86,
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
  picture: WolfSSBU,
};

export default wolf;
