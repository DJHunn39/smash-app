import getUnofficialStats from '../../helpers/getUnofficialStats';
import warioSeries from '../../series/warioSeries/warioSeries';
import WarioHeadSSBU from './WarioHeadSSBU.png';
import WarioSSBU from './Wario_SSBU.png';

const filename = 'wario';

const wario = {
  name: 'Wario',
  series: warioSeries,
  icon: WarioHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 95,
      fallSpeed: 77,
      runSpeed: 43,
      dashSpeed: 76,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: WarioSSBU,
};

export default wario;
