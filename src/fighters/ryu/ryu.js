import getUnofficialStats from '../../helpers/getUnofficialStats';
import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import RyuHeadSSBU from './RyuHeadSSBU.png';
import RyuSSBU from './Ryu_SSBU.png';

const filename = 'ryu';

const ryu = {
  name: 'Ryu',
  series: streetFighterSeries,
  icon: RyuHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 83,
      fallSpeed: 76,
      runSpeed: 42,
      dashSpeed: 73,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RyuSSBU,
};

export default ryu;
