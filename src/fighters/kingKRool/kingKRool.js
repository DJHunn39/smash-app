import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: KingKRoolSSBU,
};

export default kingKRool;
