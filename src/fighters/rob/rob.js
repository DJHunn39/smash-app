import robSeries from '../../series/robSeries/robSeries';
import RobHeadSSBU from './ROBHeadSSBU.png';
import RobSSBU from './R_O_B_SSBU.png';

const rob = {
  name: 'Rob',
  series: robSeries,
  icon: RobHeadSSBU,
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
  picture: RobSSBU,
};

export default rob;
