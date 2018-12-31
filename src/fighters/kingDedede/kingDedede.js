import getUnofficialStat from '../../helpers/getUnofficialStat';
import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KingDededeHeadSSBU from './KingDededeHeadSSBU.png';
import KingDededeSSBU from './King_Dedede_SSBU.png';

const kingDedede = {
  name: 'King Dedede',
  series: kirbySeries,
  icon: KingDededeHeadSSBU,
  stats: {
    official: {
      weight: 94,
      airSpeed: 55,
      fallSpeed: 93,
      runSpeed: 39,
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
  picture: KingDededeSSBU,
};

export default kingDedede;
