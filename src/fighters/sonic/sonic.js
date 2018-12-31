import getUnofficialStats from '../../helpers/getUnofficialStats';
import sonicSeries from '../../series/sonicSeries/sonicSeries';
import SonicHeadSSBU from './SonicHeadSSBU.png';
import SonicSSBU from './Sonic_SSBU.png';

const filename = 'sonic';

const sonic = {
  name: 'Sonic',
  series: sonicSeries,
  icon: SonicHeadSSBU,
  stats: {
    official: {
      weight: 64,
      airSpeed: 90,
      fallSpeed: 79,
      runSpeed: 100,
      dashSpeed: 95,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: SonicSSBU,
};

export default sonic;
