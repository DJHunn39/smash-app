import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PikachuHeadSSBU from './PikachuHeadSSBU.png';
import PikachuSSBU from './Pikachu_SSBU.png';

const pikachu = {
  name: 'Pikachu',
  series: pokemonSeries,
  icon: PikachuHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 71,
      fallSpeed: 74,
      runSpeed: 53,
      dashSpeed: 82,
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
  picture: PikachuSSBU,
};

export default pikachu;
