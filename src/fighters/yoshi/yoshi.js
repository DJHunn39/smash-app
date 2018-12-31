import getUnofficialStats from '../../helpers/getUnofficialStats';
import yoshiSeries from '../../series/yoshiSeries/yoshiSeries';
import YoshiHeadSSBU from './YoshiHeadSSBU.png';
import YoshiSSBU from './Yoshi_SSBU.png';

const filename = 'yoshi';

const yoshi = {
  name: 'Yoshi',
  series: yoshiSeries,
  icon: YoshiHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 100,
      fallSpeed: 61,
      runSpeed: 53,
      dashSpeed: 82,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: YoshiSSBU,
};

export default yoshi;
