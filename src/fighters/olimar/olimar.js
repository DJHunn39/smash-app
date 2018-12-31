import getUnofficialStat from '../../helpers/getUnofficialStat';
import pikminSeries from '../../series/pikminSeries/pikminSeries';
import OlimarHeadSSBU from './OlimarHeadSSBU.png';
import OlimarSSBU from './Olimar_SSBU.png';

const olimar = {
  name: 'Olimar',
  series: pikminSeries,
  icon: OlimarHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 64,
      fallSpeed: 64,
      runSpeed: 42,
      dashSpeed: 66,
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
  picture: OlimarSSBU,
};

export default olimar;
