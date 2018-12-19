import marioSeries from '../../series/marioSeries/marioSeries';
import DaisyHeadSSBU from './DaisyHeadSSBU.png';
import DaisySSBU from './Daisy_SSBU.png';

const daisy = {
  name: 'Daisy',
  series: marioSeries,
  icon: DaisyHeadSSBU,
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
  picture: DaisySSBU,
};

export default daisy;
