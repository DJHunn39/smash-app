import getUnofficialStats from '../../helpers/getUnofficialStats';
import megaManSeries from '../../series/megaManSeries/megaManSeries';
import MegaManHeadSSBU from './MegaManHeadSSBU.png';
import MegaManSSBU from './Mega_Man_SSBU.png';

const filename = 'megaMan';

const megaMan = {
  name: 'Mega Man',
  series: megaManSeries,
  icon: MegaManHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 86,
      fallSpeed: 86,
      runSpeed: 42,
      dashSpeed: 81,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: MegaManSSBU,
};

export default megaMan;
