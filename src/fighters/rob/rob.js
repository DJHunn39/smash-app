import getUnofficialStat from '../../helpers/getUnofficialStat';
import robSeries from '../../series/robSeries/robSeries';
import RobHeadSSBU from './ROBHeadSSBU.png';
import RobSSBU from './R_O_B_SSBU.png';

const rob = {
  name: 'Rob',
  series: robSeries,
  icon: RobHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 84,
      fallSpeed: 76,
      runSpeed: 45,
      dashSpeed: 83,
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
  picture: RobSSBU,
};

export default rob;
