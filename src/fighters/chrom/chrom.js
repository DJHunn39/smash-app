import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import ChromHeadSSBU from './ChromHeadSSBU.png';
import ChromSSBU from './Chrom_SSBU.png';

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
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: ChromSSBU,
};

export default chrom;
