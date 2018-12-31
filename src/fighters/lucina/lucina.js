import getUnofficialStats from '../../helpers/getUnofficialStats';
import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import LucinaHeadSSBU from './LucinaHeadSSBU.png';
import LucinaSSBU from './Lucina_SSBU.png';

const filename = 'lucina';

const lucina = {
  name: 'Lucina',
  series: fireEmblemSeries,
  icon: LucinaHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 80,
      fallSpeed: 75,
      runSpeed: 51,
      dashSpeed: 93,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: LucinaSSBU,
};

export default lucina;
