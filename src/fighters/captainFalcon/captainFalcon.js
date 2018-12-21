import fZeroSeries from '../../series/fZeroSeries/fZeroSeries';
import CaptainFalconHeadSSBU from './CaptainFalconHeadSSBU.png';
import CaptainFalconSSBU from './Captain_Falcon_SSBU.png';

const captainFalcon = {
  name: 'Captain Falcon',
  series: fZeroSeries,
  icon: CaptainFalconHeadSSBU,
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
  picture: CaptainFalconSSBU,
};

export default captainFalcon;
