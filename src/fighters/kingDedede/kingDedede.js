import getUnofficialStats from '../../helpers/getUnofficialStats';
import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KingDededeHeadSSBU from './KingDededeHeadSSBU.png';
import KingDededeSSBU from './King_Dedede_SSBU.png';

const filename = 'kingDedede';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: KingDededeSSBU,
};

export default kingDedede;
