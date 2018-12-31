import getUnofficialStats from '../../helpers/getUnofficialStats';
import donkeyKongSeries from '../../series/donkeyKongSeries/donkeyKongSeries';
import KingKRoolHeadSSBU from './KingKRoolHeadSSBU.png';
import KingKRoolSSBU from './King_K_Rool_SSBU.png';

const filename = 'kingKRool';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: KingKRoolSSBU,
};

export default kingKRool;
