import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import ChromHeadSSBU from './ChromHeadSSBU.png';
import ChromSSBU from './Chrom_SSBU.png';

const filename = 'chrom';

const chrom = {
  name: 'Chrom',
  series: fireEmblemSeries,
  icon: ChromHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 97,
      fallSpeed: 86,
      runSpeed: 56,
      dashSpeed: 91,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: ChromSSBU,
};

export default chrom;
