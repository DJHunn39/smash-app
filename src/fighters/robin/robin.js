import FireEmblemSymbol from '../../seriesIcons/FireEmblemSymbol.svg';
import RobinHeadSSBU from './RobinHeadSSBU.png';
import RobinSSBU from './Robin_SSBU.png';

const robin = {
  name: 'Robin',
  series: {
    icon: FireEmblemSymbol,
    name: 'Robin',
  },
  icon: RobinHeadSSBU,
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
  picture: RobinSSBU,
};

export default robin;
