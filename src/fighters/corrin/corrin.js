import getUnofficialStat from '../../helpers/getUnofficialStat';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import CorrinHeadSSBU from './CorrinHeadSSBU.png';
import CorrinSSBU from './Corrin_SSBU.png';

const corrin = {
  name: 'Corrin',
  series: fireEmblemSeries,
  icon: CorrinHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 76,
      fallSpeed: 79,
      runSpeed: 41,
      dashSpeed: 78,
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
  picture: CorrinSSBU,
};

export default corrin;
