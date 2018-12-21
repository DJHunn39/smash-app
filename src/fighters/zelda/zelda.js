import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import ZeldaHeadSSBU from './ZeldaHeadSSBU.png';
import ZeldaSSBU from './Zelda_SSBU.png';

const zelda = {
  name: 'Zelda',
  series: zeldaSeries,
  icon: ZeldaHeadSSBU,
  stats: {
    official: {
      weight: 63,
      airSpeed: 81,
      fallSpeed: 64,
      runSpeed: 37,
      dashSpeed: 81,
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
  picture: ZeldaSSBU,
};

export default zelda;
