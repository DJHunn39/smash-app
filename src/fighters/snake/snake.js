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
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: SnakeSSBU,
};

export default snake;
