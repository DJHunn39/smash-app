import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import GreninjaHeadSSBU from './GreninjaHeadSSBU.png';
import GreninjaSSBU from './Greninja_SSBU.png';

const greninja = {
  name: 'Greninja',
  series: pokemonSeries,
  icon: GreninjaHeadSSBU,
  stats: {
    official: {
      weight: 65,
      airSpeed: 92,
      fallSpeed: 88,
      runSpeed: 59,
      dashSpeed: 90,
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
  picture: GreninjaSSBU,
};

export default greninja;
