import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import ChromHeadSSBU from './ChromHeadSSBU.png';
import ChromSSBU from './Chrom_SSBU.png';

const chrom = {
  name: 'Chrom',
  series: fireEmblemSeries,
  icon: ChromHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
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
