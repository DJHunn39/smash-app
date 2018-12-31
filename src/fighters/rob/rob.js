import robSeries from '../../series/robSeries/robSeries';
import RobHeadSSBU from './ROBHeadSSBU.png';
import RobSSBU from './R_O_B_SSBU.png';

const rob = {
  name: 'Rob',
  series: robSeries,
  icon: RobHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 84,
      fallSpeed: 76,
      runSpeed: 45,
      dashSpeed: 83,
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
  picture: RobSSBU,
};

export default rob;
