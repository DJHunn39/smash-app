import getUnofficialStat from '../../helpers/getUnofficialStat';
import castlevaniaSeries from '../../series/castlevaniaSeries/castlevaniaSeries';
import SimonHeadSSBU from './SimonHeadSSBU.png';
import SimonSSBU from './Simon_SSBU.png';

const simon = {
  name: 'Simon',
  series: castlevaniaSeries,
  icon: SimonHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 70,
      fallSpeed: 88,
      runSpeed: 39,
      dashSpeed: 71,
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
  picture: SimonSSBU,
};

export default simon;
