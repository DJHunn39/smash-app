import getUnofficialStat from '../../helpers/getUnofficialStat';
import marioSeries from '../../series/marioSeries/marioSeries';
import BowserJrHeadSSBU from './BowserJrHeadSSBU.png';
import BowserJrSSBU from './BowserJr_SSBU.png';

const bowserJr = {
  name: 'BowserJr',
  series: marioSeries,
  icon: BowserJrHeadSSBU,
  stats: {
    official: {
      weight: 80,
      airSpeed: 84,
      fallSpeed: 79,
      runSpeed: 41,
      dashSpeed: 72,
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
  picture: BowserJrSSBU,
};

export default bowserJr;
