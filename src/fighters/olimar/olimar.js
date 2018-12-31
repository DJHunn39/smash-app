import getUnofficialStats from '../../helpers/getUnofficialStats';
import pikminSeries from '../../series/pikminSeries/pikminSeries';
import OlimarHeadSSBU from './OlimarHeadSSBU.png';
import OlimarSSBU from './Olimar_SSBU.png';

const filename = 'olimar';

const olimar = {
  name: 'Olimar',
  series: pikminSeries,
  icon: OlimarHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 64,
      fallSpeed: 64,
      runSpeed: 42,
      dashSpeed: 66,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: OlimarSSBU,
};

export default olimar;
