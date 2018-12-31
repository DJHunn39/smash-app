import getUnofficialStats from '../../helpers/getUnofficialStats';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import ToonLinkHeadSSBU from './ToonLinkHeadSSBU.png';
import ToonLinkSSBU from './Toon_Link_SSBU.png';

const filename = 'toonLink';

const toonLink = {
  name: 'Toon Link',
  series: zeldaSeries,
  icon: ToonLinkHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 78,
      fallSpeed: 66,
      runSpeed: 50,
      dashSpeed: 79,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: ToonLinkSSBU,
};

export default toonLink;
