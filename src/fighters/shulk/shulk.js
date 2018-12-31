import getUnofficialStat from '../../helpers/getUnofficialStat';
import xenobladeSeries from '../../series/xenobladeSeries/xenobladeSeries';
import ShulkHeadSSBU from './ShulkHeadSSBU.png';
import ShulkSSBU from './Shulk_SSBU.png';

const shulk = {
  name: 'Shulk',
  series: xenobladeSeries,
  icon: ShulkHeadSSBU,
  stats: {
    official: {
      weight: 72,
      airSpeed: 83,
      fallSpeed: 75,
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
  picture: ShulkSSBU,
};

export default shulk;
