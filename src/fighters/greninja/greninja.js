import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import GreninjaHeadSSBU from './GreninjaHeadSSBU.png';
import GreninjaSSBU from './Greninja_SSBU.png';

const filename = 'greninja';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: GreninjaSSBU,
};

export default greninja;
