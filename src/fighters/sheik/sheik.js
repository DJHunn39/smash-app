import getUnofficialStats from '../../helpers/getUnofficialStats';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import SheikHeadSSBU from './SheikHeadSSBU.png';
import SheikSSBU from './Sheik_SSBU.png';

const filename = 'sheik';

const sheik = {
  name: 'Sheik',
  series: zeldaSeries,
  icon: SheikHeadSSBU,
  stats: {
    official: {
      weight: 58,
      airSpeed: 86,
      fallSpeed: 83,
      runSpeed: 63,
      dashSpeed: 90,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: SheikSSBU,
};

export default sheik;
