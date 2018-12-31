import getUnofficialStat from '../../helpers/getUnofficialStat';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import ToonLinkHeadSSBU from './ToonLinkHeadSSBU.png';
import ToonLinkSSBU from './Toon_Link_SSBU.png';

const toonLink = {
  name: 'Toon Link',
  series: zeldaSeries,
  icon: ToonLinkHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 78,
      fallSpeed: 66,
      runSpeed: 50,
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
  picture: ToonLinkSSBU,
};

export default toonLink;
