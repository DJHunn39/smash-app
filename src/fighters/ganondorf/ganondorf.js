import getUnofficialStats from '../../helpers/getUnofficialStats';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import GanondorfHeadSSBU from './GanondorfHeadSSBU.png';
import GanondorfSSBU from './Ganondorf_SSBU.png';

const filename = 'ganondorf';

const ganondorf = {
  name: 'Ganondorf',
  series: zeldaSeries,
  icon: GanondorfHeadSSBU,
  stats: {
    official: {
      weight: 87,
      airSpeed: 62,
      fallSpeed: 79,
      runSpeed: 35,
      dashSpeed: 77,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: GanondorfSSBU,
};

export default ganondorf;
