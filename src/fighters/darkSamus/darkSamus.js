import metroidSeries from '../../series/metroidSeries/metroidSeries';
import DarkSamusHeadSSBU from './DarkSamusHeadSSBU.png';
import DarkSamusSSBU from './Dark_Samus_SSBU.png';

const darkSamus = {
  name: 'Dark Samus',
  series: metroidSeries,
  icon: DarkSamusHeadSSBU,
  stats: {
    official: {
      weight: 80,
      airSpeed: 82,
      fallSpeed: 63,
      runSpeed: 43,
      dashSpeed: 77,
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
  picture: DarkSamusSSBU,
};

export default darkSamus;
