import KingDededeSymbol from '../seriesIcons/KingDededeSymbol.svg';
import KingDededeHeadSSBU from './KingDededeHeadSSBU.png';
import KingDededeSSBU from './King_Dedede_SSBU.png';

const kingDedede = {
  name: 'KingDedede',
  series: {
    icon: KirbySymbol,
    name: 'KingDedede',
  },
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
  picture: KingDededeSSBU,
};

export default kingDedede;
