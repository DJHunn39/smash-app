import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KirbyHeadSSBU from './KirbyHeadSSBU.png';
import KirbySSBU from './Kirby_SSBU.png';

const kirby = {
  name: 'Kirby',
  series: kirbySeries,
  icon: KirbyHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 63,
      fallSpeed: 59,
      runSpeed: 45,
      dashSpeed: 79,
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
  picture: KirbySSBU,
};

export default kirby;
