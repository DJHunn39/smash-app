import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import IkeHeadSSBU from './IkeHeadSSBU.png';
import IkeSSBU from './Ike_SSBU.png';

const ike = {
  name: 'Ike',
  series: fireEmblemSeries,
  icon: IkeHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 84,
      fallSpeed: 79,
      runSpeed: 39,
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
  picture: IkeSSBU,
};

export default ike;
