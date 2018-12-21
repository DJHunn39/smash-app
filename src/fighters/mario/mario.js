import marioSeries from '../../series/marioSeries/marioSeries';
import MarioHeadSSBU from './MarioHeadSSBU.png';
import MarioSSBU from './Mario_SSBU.png';

const mario = {
  name: 'Mario',
  series: marioSeries,
  icon: MarioHeadSSBU,
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
  picture: MarioSSBU,
};

export default mario;
