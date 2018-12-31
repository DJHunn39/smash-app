import metroidSeries from '../../series/metroidSeries/metroidSeries';
import SamusHeadSSBU from './SamusHeadSSBU.png';
import SamusSSBU from './Samus_SSBU.png';

const samus = {
  name: 'Samus',
  series: metroidSeries,
  icon: SamusHeadSSBU,
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
  picture: SamusSSBU,
};

export default samus;
