import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import DaisyHeadSSBU from './DaisyHeadSSBU.png';
import DaisySSBU from './Daisy_SSBU.png';

const filename = 'daisy';

const daisy = {
  name: 'Daisy',
  series: marioSeries,
  icon: DaisyHeadSSBU,
  stats: {
    official: {
      weight: 66,
      airSpeed: 77,
      fallSpeed: 57,
      runSpeed: 41,
      dashSpeed: 75,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: DaisySSBU,
};

export default daisy;
