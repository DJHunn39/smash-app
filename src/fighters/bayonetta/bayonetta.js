import bayonettaSeries from '../../series/bayonettaSeries/bayonettaSeries';
import BayonettaHeadSSBU from './BayonettaHeadSSBU.png';
import BayonettaSSBU from './Bayonetta_SSBU.png';

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
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: BayonettaSSBU,
};

export default bayonetta;
