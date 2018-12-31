import getUnofficialStat from '../../helpers/getUnofficialStat';
import metroidSeries from '../../series/metroidSeries/metroidSeries';
import RidleyHeadSSBU from './RidleyHeadSSBU.png';
import RidleySSBU from './Ridley_SSBU.png';

const ridley = {
  name: 'Ridley',
  series: metroidSeries,
  icon: RidleyHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 78,
      fallSpeed: 85,
      runSpeed: 57,
      dashSpeed: 74,
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
  picture: RidleySSBU,
};

export default ridley;
