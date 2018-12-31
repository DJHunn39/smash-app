import getUnofficialStats from '../../helpers/getUnofficialStats';
import splatoonSeries from '../../series/splatoonSeries/splatoonSeries';
import InklingHeadSSBU from './InklingHeadSSBU.png';
import InklingSSBU from './Inkling_SSBU.png';

const filename = 'inkling';

const inkling = {
  name: 'Inkling',
  series: splatoonSeries,
  icon: InklingHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 90,
      fallSpeed: 75,
      runSpeed: 50,
      dashSpeed: 88,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: InklingSSBU,
};

export default inkling;
