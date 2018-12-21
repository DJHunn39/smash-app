import punchOutSeries from '../../series/punchOutSeries/punchOutSeries';
import LittleMacHeadSSBU from './LittleMacHeadSSBU.png';
import LittleMacSSBU from './Little_Mac_SSBU.png';

const littleMac = {
  name: 'Little Mac',
  series: punchOutSeries,
  icon: LittleMacHeadSSBU,
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
  picture: LittleMacSSBU,
};

export default littleMac;
