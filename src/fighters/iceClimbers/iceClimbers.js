import BayonettaSymbol from '../seriesIcons/BayonettaSymbol.svg';
import BayonettaHeadSSBU from './BayonettaHeadSSBU.png';
import BayonettaSSBU from './Bayonetta_SSBU.png';

const bayonetta = {
  name: 'Bayonetta',
  series: {
    icon: BayonettaSymbol,
    name: 'Bayonetta',
  },
  icon: BayonettaHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      fun: 0,
      power: 0,
      nostalgia: 0,
      recovery: 0,
      finalSmash: 0,
    },
  },
  picture: BayonettaSSBU,
};

export default bayonetta;
