import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import CharizardHeadSSBU from './CharizardHeadSSBU.png';
import CharizardSSBU from './Charizard_SSBU.png';

const charizard = {
  name: 'Charizard',
  series: pokemonSeries,
  icon: CharizardHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: CharizardSSBU,
};

export default charizard;
