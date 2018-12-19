import IkeSymbol from '../../seriesIcons/IkeSymbol.svg';
import IkeHeadSSBU from './IkeHeadSSBU.png';
import IkeSSBU from './Ike_SSBU.png';

const ike = {
  name: 'Ike',
  series: {
    icon: FireEmblemSymbol,
    name: 'Ike',
  },
  icon: IkeHeadSSBU,
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
  picture: IkeSSBU,
};

export default ike;
