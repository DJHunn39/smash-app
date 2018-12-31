import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import IncineroarHeadSSBU from './IncineroarHeadSSBU.png';
import IncineroarSSBU from './Incineroar_SSBU.png';

const filename = 'incineroar';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: IncineroarSSBU,
};

export default incineroar;
