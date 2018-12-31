import getUnofficialStats from '../../helpers/getUnofficialStats';
import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import KenHeadSSBU from './KenHeadSSBU.png';
import KenSSBU from './Ken_SSBU.png';

const filename = 'ken';

const ken = {
  name: 'Ken',
  series: streetFighterSeries,
  icon: KenHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 83,
      fallSpeed: 76,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: KenSSBU,
};

export default ken;
