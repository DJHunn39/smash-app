import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import MewtwoHeadSSBU from './MewtwoHeadSSBU.png';
import MewtwoSSBU from './Mewtwo_SSBU.png';

const filename = 'mewtwo';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: MewtwoSSBU,
};

export default mewtwo;
