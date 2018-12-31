import getUnofficialStat from '../../helpers/getUnofficialStat';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import LinkHeadSSBU from './LinkHeadSSBU.png';
import LinkSSBU from './Link_SSBU.png';

const link = {
  name: 'Link',
  series: zeldaSeries,
  icon: LinkHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 69,
      fallSpeed: 76,
      runSpeed: 40,
      dashSpeed: 82,
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
  picture: LinkSSBU,
};

export default link;
