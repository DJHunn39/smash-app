import getUnofficialStat from '../../helpers/getUnofficialStat';
import metalGearSeries from '../../series/metalGearSeries/metalGearSeries';
import SnakeHeadSSBU from './SnakeHeadSSBU.png';
import SnakeSSBU from './Snake_SSBU.png';

const snake = {
  name: 'Snake',
  series: metalGearSeries,
  icon: SnakeHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 73,
      fallSpeed: 82,
      runSpeed: 41,
      dashSpeed: 73,
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
  picture: SnakeSSBU,
};

export default snake;
