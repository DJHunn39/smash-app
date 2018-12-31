import getUnofficialStat from '../../helpers/getUnofficialStat';
import kirbySeries from '../../series/kirbySeries/kirbySeries';
import MetaKnightHeadSSBU from './MetaKnightHeadSSBU.png';
import MetaKnightSSBU from './Meta_Knight_SSBU.png';

const metaKnight = {
  name: 'Meta Knight',
  series: kirbySeries,
  icon: MetaKnightHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 77,
      fallSpeed: 79,
      runSpeed: 54,
      dashSpeed: 91,
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
  picture: MetaKnightSSBU,
};

export default metaKnight;
