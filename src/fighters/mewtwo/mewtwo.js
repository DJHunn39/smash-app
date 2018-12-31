import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import MewtwoHeadSSBU from './MewtwoHeadSSBU.png';
import MewtwoSSBU from './Mewtwo_SSBU.png';

const mewtwo = {
  name: 'Mewtwo',
  series: pokemonSeries,
  icon: MewtwoHeadSSBU,
  stats: {
    official: {
      weight: 57,
      airSpeed: 98,
      fallSpeed: 74,
      runSpeed: 59,
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
  picture: MewtwoSSBU,
};

export default mewtwo;
