import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: ChromSSBU,
};

export default chrom;
