import punchOutSeries from '../../series/punchOutSeries/punchOutSeries';
import LittleMacHeadSSBU from './LittleMacHeadSSBU.png';
import LittleMacSSBU from './Little_Mac_SSBU.png';

const littleMac = {
  name: 'Little Mac',
  series: punchOutSeries,
  icon: LittleMacHeadSSBU,
  stats: {
    official: {
      weight: 64,
      airSpeed: 90,
      fallSpeed: 93,
      runSpeed: 64,
      dashSpeed: 98,
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
