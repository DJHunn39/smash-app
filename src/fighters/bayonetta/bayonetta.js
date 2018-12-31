import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: BayonettaSSBU,
};

export default bayonetta;
