import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KingDededeHeadSSBU from './KingDededeHeadSSBU.png';
import KingDededeSSBU from './King_Dedede_SSBU.png';

const kingDedede = {
  name: 'King Dedede',
  series: kirbySeries,
  icon: KingDededeHeadSSBU,
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
  picture: KingDededeSSBU,
};

export default kingDedede;
