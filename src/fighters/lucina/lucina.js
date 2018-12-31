import getUnofficialStat from '../../helpers/getUnofficialStat';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import LucinaHeadSSBU from './LucinaHeadSSBU.png';
import LucinaSSBU from './Lucina_SSBU.png';

const lucina = {
  name: 'Lucina',
  series: fireEmblemSeries,
  icon: LucinaHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 80,
      fallSpeed: 75,
      runSpeed: 51,
      dashSpeed: 93,
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
  picture: LucinaSSBU,
};

export default lucina;
