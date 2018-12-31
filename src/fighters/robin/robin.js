import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import RobinHeadSSBU from './RobinHeadSSBU.png';
import RobinSSBU from './Robin_SSBU.png';

const robin = {
  name: 'Robin',
  series: fireEmblemSeries,
  icon: RobinHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 78,
      fallSpeed: 71,
      runSpeed: 33,
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
  picture: RobinSSBU,
};

export default robin;
