import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import SquirtleHeadSSBU from './SquirtleHeadSSBU.png';
import SquirtleSSBU from './Squirtle_SSBU.png';

const filename = 'squirtle';

const squirtle = {
  name: 'Squirtle',
  series: pokemonSeries,
  icon: SquirtleHeadSSBU,
  stats: {
    official: {
      weight: 56,
      airSpeed: 75,
      fallSpeed: 64,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: SquirtleSSBU,
};

export default squirtle;
