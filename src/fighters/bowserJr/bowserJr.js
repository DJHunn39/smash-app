import marioSeries from '../../series/marioSeries/marioSeries';
import BowserJrHeadSSBU from './BowserJrHeadSSBU.png';
import BowserJrSSBU from './BowserJr_SSBU.png';

const bowserJr = {
  name: 'BowserJr',
  series: marioSeries,
  icon: BowserJrHeadSSBU,
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
  picture: BowserJrSSBU,
};

export default bowserJr;
