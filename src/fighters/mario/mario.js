import getUnofficialStat from '../../helpers/getUnofficialStat';
import marioSeries from '../../series/marioSeries/marioSeries';
import MarioHeadSSBU from './MarioHeadSSBU.png';
import MarioSSBU from './Mario_SSBU.png';

const mario = {
  name: 'Mario',
  series: marioSeries,
  icon: MarioHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 90,
      fallSpeed: 71,
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
  picture: MarioSSBU,
};

export default mario;
