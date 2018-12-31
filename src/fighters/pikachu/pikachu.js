import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PikachuHeadSSBU from './PikachuHeadSSBU.png';
import PikachuSSBU from './Pikachu_SSBU.png';

const filename = 'pikachu';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: PikachuSSBU,
};

export default pikachu;
