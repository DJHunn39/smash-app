import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import CharizardHeadSSBU from './CharizardHeadSSBU.png';
import CharizardSSBU from './Charizard_SSBU.png';

const filename = 'charizard';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: CharizardSSBU,
};

export default charizard;
