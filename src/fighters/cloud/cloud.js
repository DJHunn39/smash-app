import getUnofficialStat from '../../helpers/getUnofficialStat';
import finalFantasySeries from '../../series/finalFantasySeries/finalFantasySeries';
import CloudHeadSSBU from './CloudHeadSSBU.png';
import CloudSSBU from './Cloud_SSBU.png';

const cloud = {
  name: 'Cloud',
  series: finalFantasySeries,
  icon: CloudHeadSSBU,
  stats: {
    official: {
      weight: 74,
      airSpeed: 86,
      fallSpeed: 80,
      runSpeed: 56,
      dashSpeed: 89,
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
  picture: CloudSSBU,
};

export default cloud;
