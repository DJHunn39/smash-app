import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import MarthHeadSSBU from './MarthHeadSSBU.png';
import MarthSSBU from './Marth_SSBU.png';

const filename = 'marth';

const marth = {
  name: 'Marth',
  series: fireEmblemSeries,
  icon: MarthHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 80,
      fallSpeed: 75,
      runSpeed: 51,
      dashSpeed: 93,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: MarthSSBU,
};

export default marth;
