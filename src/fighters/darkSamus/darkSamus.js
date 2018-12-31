import getUnofficialStat from '../../helpers/getUnofficialStat';
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
  picture: DarkSamusSSBU,
};

export default darkSamus;
