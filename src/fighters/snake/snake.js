import SnakeSymbol from '../../seriesIcons/SnakeSymbol.svg';
import SnakeHeadSSBU from './SnakeHeadSSBU.png';
import SnakeSSBU from './Snake_SSBU.png';

const snake = {
  name: 'Snake',
  series: {
    icon: MetalGearSymbol,
    name: 'Snake',
  },
  icon: SnakeHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: SnakeSSBU,
};

export default snake;
