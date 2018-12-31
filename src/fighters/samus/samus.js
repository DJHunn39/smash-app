import getUnofficialStat from '../../helpers/getUnofficialStat';
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
  picture: SamusSSBU,
};

export default samus;
