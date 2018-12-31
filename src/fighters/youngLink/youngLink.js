import getUnofficialStat from '../../helpers/getUnofficialStat';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import YoungLinkHeadSSBU from './YoungLinkHeadSSBU.png';
import YoungLinkSSBU from './Young_Link_SSBU.png';

const youngLink = {
  name: 'Young Link',
  series: zeldaSeries,
  icon: YoungLinkHeadSSBU,
  stats: {
    official: {
      weight: 65,
      airSpeed: 72,
      fallSpeed: 86,
      runSpeed: 45,
      dashSpeed: 86,
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
  picture: YoungLinkSSBU,
};

export default youngLink;
