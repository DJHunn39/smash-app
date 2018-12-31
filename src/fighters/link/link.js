import getUnofficialStats from '../../helpers/getUnofficialStats';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import LinkHeadSSBU from './LinkHeadSSBU.png';
import LinkSSBU from './Link_SSBU.png';

const filename = 'link';

const link = {
  name: 'Link',
  series: zeldaSeries,
  icon: LinkHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 69,
      fallSpeed: 76,
      runSpeed: 40,
      dashSpeed: 82,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: LinkSSBU,
};

export default link;
