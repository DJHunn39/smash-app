import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KingDededeHeadSSBU from './KingDededeHeadSSBU.png';
import KingDededeSSBU from './King_Dedede_SSBU.png';

const kingDedede = {
  name: 'King Dedede',
  series: kirbySeries,
  icon: KingDededeHeadSSBU,
  stats: {
    official: {
      weight: 94,
      airSpeed: 55,
      fallSpeed: 93,
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
  picture: KingDededeSSBU,
};

export default kingDedede;
