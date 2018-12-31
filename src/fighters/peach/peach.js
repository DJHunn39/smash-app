import marioSeries from '../../series/marioSeries/marioSeries';
import PeachHeadSSBU from './PeachHeadSSBU.png';
import PeachSSBU from './Peach_SSBU.png';

const peach = {
  name: 'Peach',
  series: marioSeries,
  icon: PeachHeadSSBU,
  stats: {
    official: {
      weight: 66,
      airSpeed: 77,
      fallSpeed: 57,
      runSpeed: 41,
      dashSpeed: 75,
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
