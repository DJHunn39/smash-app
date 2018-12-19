import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import RobinHeadSSBU from './RobinHeadSSBU.png';
import RobinSSBU from './Robin_SSBU.png';

const robin = {
  name: 'Robin',
  series: fireEmblemSeries,
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
