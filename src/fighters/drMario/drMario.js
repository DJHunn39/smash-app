import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import DrMarioHeadSSBU from './DrMarioHeadSSBU.png';
import DrMarioSSBU from './Dr_Mario_SSBU.png';

const filename = 'drMario';

const drMario = {
  name: 'Dr Mario',
  series: marioSeries,
  icon: DrMarioHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 90,
      fallSpeed: 71,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: DrMarioSSBU,
};

export default drMario;
