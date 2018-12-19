import CloudSymbol from '../../seriesIcons/CloudSymbol.svg';
import CloudHeadSSBU from './CloudHeadSSBU.png';
import CloudSSBU from './Cloud_SSBU.png';

const cloud = {
  name: 'Cloud',
  series: {
    icon: FinalFantasySymbol,
    name: 'Cloud',
  },
  icon: CloudHeadSSBU,
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
  picture: CloudSSBU,
};

export default cloud;
