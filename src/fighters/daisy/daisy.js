import marioSeries from '../../series/marioSeries/marioSeries';
import DaisyHeadSSBU from './DaisyHeadSSBU.png';
import DaisySSBU from './Daisy_SSBU.png';

const daisy = {
  name: 'Daisy',
  series: marioSeries,
  icon: DaisyHeadSSBU,
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
  picture: DaisySSBU,
};

export default daisy;
