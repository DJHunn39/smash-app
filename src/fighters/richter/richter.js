import getUnofficialStats from '../../helpers/getUnofficialStats';
import castlevaniaSeries from '../../series/castlevaniaSeries/castlevaniaSeries';
import RichterHeadSSBU from './RichterHeadSSBU.png';
import RichterSSBU from './Richter_SSBU.png';

const filename = 'richter';

const richter = {
  name: 'Richter',
  series: castlevaniaSeries,
  icon: RichterHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 70,
      fallSpeed: 88,
      runSpeed: 39,
      dashSpeed: 71,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: RichterSSBU,
};

export default richter;
