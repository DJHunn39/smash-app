import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import RosalinaLumaHeadSSBU from './RosalinaLumaHeadSSBU.png';
import RosalinaLumaSSBU from './RosalinaLuma_SSBU.png';

const filename = 'rosalinaAndLuma';

const rosalinaAndLuma = {
  name: 'Rosalina & Luma',
  series: marioSeries,
  icon: RosalinaLumaHeadSSBU,
  stats: {
    official: {
      weight: 61,
      airSpeed: 78,
      fallSpeed: 57,
      runSpeed: 47,
      dashSpeed: 84,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RosalinaLumaSSBU,
};

export default rosalinaAndLuma;
