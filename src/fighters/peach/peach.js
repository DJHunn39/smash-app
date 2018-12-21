import marioSeries from '../../series/marioSeries/marioSeries';
import PeachHeadSSBU from './PeachHeadSSBU.png';
import PeachSSBU from './Peach_SSBU.png';

const peach = {
  name: 'Peach',
  series: marioSeries,
  icon: PeachHeadSSBU,
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
  picture: PeachSSBU,
};

export default peach;
