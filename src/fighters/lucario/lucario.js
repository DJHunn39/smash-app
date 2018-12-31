import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import LucarioHeadSSBU from './LucarioHeadSSBU.png';
import LucarioSSBU from './Lucario_SSBU.png';

const filename = 'lucario';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: LucarioSSBU,
};

export default lucario;
