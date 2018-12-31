import getUnofficialStats from '../../helpers/getUnofficialStats';
import bayonettaSeries from '../../series/bayonettaSeries/bayonettaSeries';
import BayonettaHeadSSBU from './BayonettaHeadSSBU.png';
import BayonettaSSBU from './Bayonetta_SSBU.png';

const filename = 'bayonetta';

const bayonetta = {
  name: 'Bayonetta',
  series: bayonettaSeries,
  icon: BayonettaHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: BayonettaSSBU,
};

export default bayonetta;
