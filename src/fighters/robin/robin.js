import getUnofficialStat from '../../helpers/getUnofficialStat';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import RobinHeadSSBU from './RobinHeadSSBU.png';
import RobinSSBU from './Robin_SSBU.png';

const robin = {
  name: 'Robin',
  series: fireEmblemSeries,
  icon: RobinHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 78,
      fallSpeed: 71,
      runSpeed: 33,
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
  picture: RobinSSBU,
};

export default robin;
