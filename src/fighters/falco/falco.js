import getUnofficialStats from '../../helpers/getUnofficialStats';
import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import FalcoHeadSSBU from './FalcoHeadSSBU.png';
import FalcoSSBU from './Falco_SSBU.png';

const filename = 'falco';

const falco = {
  name: 'Falco',
  series: starFoxSeries,
  icon: FalcoHeadSSBU,
  stats: {
    official: {
      weight: 61,
      airSpeed: 73,
      fallSpeed: 86,
      runSpeed: 42,
      dashSpeed: 84,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: FalcoSSBU,
};

export default falco;
