import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import LucarioHeadSSBU from './LucarioHeadSSBU.png';
import LucarioSSBU from './Lucario_SSBU.png';

const lucario = {
  name: 'Lucario',
  series: pokemonSeries,
  icon: LucarioHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 95,
      fallSpeed: 80,
      runSpeed: 44,
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
  picture: LucarioSSBU,
};

export default lucario;
