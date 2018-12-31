import getUnofficialStat from '../../helpers/getUnofficialStat';
import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import KenHeadSSBU from './KenHeadSSBU.png';
import KenSSBU from './Ken_SSBU.png';

const ken = {
  name: 'Ken',
  series: streetFighterSeries,
  icon: KenHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 83,
      fallSpeed: 76,
      runSpeed: 46,
      dashSpeed: 80,
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
  picture: KenSSBU,
};

export default ken;
