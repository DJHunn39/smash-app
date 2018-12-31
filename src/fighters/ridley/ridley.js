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
  picture: RidleySSBU,
};

export default ridley;
