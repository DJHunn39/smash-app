import getUnofficialStats from '../../helpers/getUnofficialStats';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import YoungLinkHeadSSBU from './YoungLinkHeadSSBU.png';
import YoungLinkSSBU from './Young_Link_SSBU.png';

const filename = 'youngLink';

const youngLink = {
  name: 'Young Link',
  series: zeldaSeries,
  icon: YoungLinkHeadSSBU,
  stats: {
    official: {
      weight: 65,
      airSpeed: 72,
      fallSpeed: 86,
      runSpeed: 45,
      dashSpeed: 86,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: YoungLinkSSBU,
};

export default youngLink;
