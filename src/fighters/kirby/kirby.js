import getUnofficialStat from '../../helpers/getUnofficialStat';
import kirbySeries from '../../series/kirbySeries/kirbySeries';
import KirbyHeadSSBU from './KirbyHeadSSBU.png';
import KirbySSBU from './Kirby_SSBU.png';

const kirby = {
  name: 'Kirby',
  series: kirbySeries,
  icon: KirbyHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 63,
      fallSpeed: 59,
      runSpeed: 45,
      dashSpeed: 79,
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
  picture: KirbySSBU,
};

export default kirby;
