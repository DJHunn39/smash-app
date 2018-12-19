import KirbySymbol from '../../seriesIcons/KirbySymbol.svg';
import KirbyHeadSSBU from './KirbyHeadSSBU.png';
import KirbySSBU from './Kirby_SSBU.png';

const kirby = {
  name: 'Kirby',
  series: {
    icon: KirbySymbol,
    name: 'Kirby',
  },
  icon: KirbyHeadSSBU,
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
  picture: KirbySSBU,
};

export default kirby;
