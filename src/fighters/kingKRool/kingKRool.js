import KingKRoolSymbol from '../seriesIcons/KingKRoolSymbol.svg';
import KingKRoolHeadSSBU from './KingKRoolHeadSSBU.png';
import KingKRoolSSBU from './King_K_Rool_SSBU.png';

const kingKRool = {
  name: 'KingKRool',
  series: {
    icon: DKSymbol,
    name: 'KingKRool',
  },
  icon: KingKRoolHeadSSBU,
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
  picture: KingKRoolSSBU,
};

export default kingKRool;
