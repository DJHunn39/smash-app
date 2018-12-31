import getUnofficialStat from '../../helpers/getUnofficialStat';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import IkeHeadSSBU from './IkeHeadSSBU.png';
import IkeSSBU from './Ike_SSBU.png';

const ike = {
  name: 'Ike',
  series: fireEmblemSeries,
  icon: IkeHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 84,
      fallSpeed: 79,
      runSpeed: 39,
      dashSpeed: 75,
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
  picture: IkeSSBU,
};

export default ike;
