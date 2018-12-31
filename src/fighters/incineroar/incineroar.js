import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import IncineroarHeadSSBU from './IncineroarHeadSSBU.png';
import IncineroarSSBU from './Incineroar_SSBU.png';

const incineroar = {
  name: 'Incineroar',
  series: pokemonSeries,
  icon: IncineroarHeadSSBU,
  stats: {
    official: {
      weight: 86,
      airSpeed: 65,
      fallSpeed: 84,
      runSpeed: 31,
      dashSpeed: 73,
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
  picture: IncineroarSSBU,
};

export default incineroar;
