import getUnofficialStat from '../../helpers/getUnofficialStat';
import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import LucasHeadSSBU from './LucasHeadSSBU.png';
import LucasSSBU from './Lucas_SSBU.png';

const lucas = {
  name: 'Lucas',
  series: earthboundSeries,
  icon: LucasHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 86,
      fallSpeed: 65,
      runSpeed: 43,
      dashSpeed: 75,
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
  picture: LucasSSBU,
};

export default lucas;
