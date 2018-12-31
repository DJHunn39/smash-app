import getUnofficialStat from '../../helpers/getUnofficialStat';
import punchOutSeries from '../../series/punchOutSeries/punchOutSeries';
import LittleMacHeadSSBU from './LittleMacHeadSSBU.png';
import LittleMacSSBU from './Little_Mac_SSBU.png';

const littleMac = {
  name: 'Little Mac',
  series: punchOutSeries,
  icon: LittleMacHeadSSBU,
  stats: {
    official: {
      weight: 64,
      airSpeed: 90,
      fallSpeed: 93,
      runSpeed: 64,
      dashSpeed: 98,
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
  picture: LittleMacSSBU,
};

export default littleMac;
