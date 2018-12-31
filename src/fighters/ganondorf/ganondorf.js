import getUnofficialStat from '../../helpers/getUnofficialStat';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import GanondorfHeadSSBU from './GanondorfHeadSSBU.png';
import GanondorfSSBU from './Ganondorf_SSBU.png';

const ganondorf = {
  name: 'Ganondorf',
  series: zeldaSeries,
  icon: GanondorfHeadSSBU,
  stats: {
    official: {
      weight: 87,
      airSpeed: 62,
      fallSpeed: 79,
      runSpeed: 35,
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
  picture: GanondorfSSBU,
};

export default ganondorf;
