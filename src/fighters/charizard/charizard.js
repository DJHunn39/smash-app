import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import CharizardHeadSSBU from './CharizardHeadSSBU.png';
import CharizardSSBU from './Charizard_SSBU.png';

const charizard = {
  name: 'Charizard',
  series: pokemonSeries,
  icon: CharizardHeadSSBU,
  stats: {
    official: {
      weight: 86,
      airSpeed: 82,
      fallSpeed: 72,
      runSpeed: 57,
      dashSpeed: 95,
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
  picture: CharizardSSBU,
};

export default charizard;
