import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import CorrinHeadSSBU from './CorrinHeadSSBU.png';
import CorrinSSBU from './Corrin_SSBU.png';

const filename = 'corrin';

const corrin = {
  name: 'Corrin',
  series: fireEmblemSeries,
  icon: CorrinHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 76,
      fallSpeed: 79,
      runSpeed: 41,
      dashSpeed: 78,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: CorrinSSBU,
};

export default corrin;
