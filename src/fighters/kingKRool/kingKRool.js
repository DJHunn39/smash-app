import donkeyKongSeries from '../../series/donkeyKongSeries/donkeyKongSeries';
import KingKRoolHeadSSBU from './KingKRoolHeadSSBU.png';
import KingKRoolSSBU from './King_K_Rool_SSBU.png';

const kingKRool = {
  name: 'King K.Rool',
  series: donkeyKongSeries,
  icon: KingKRoolHeadSSBU,
  stats: {
    official: {
      weight: 99,
      airSpeed: 70,
      fallSpeed: 81,
      runSpeed: 39,
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
  picture: KingKRoolSSBU,
};

export default kingKRool;
