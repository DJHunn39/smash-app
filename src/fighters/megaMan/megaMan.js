import getUnofficialStat from '../../helpers/getUnofficialStat';
import megaManSeries from '../../series/megaManSeries/megaManSeries';
import MegaManHeadSSBU from './MegaManHeadSSBU.png';
import MegaManSSBU from './Mega_Man_SSBU.png';

const megaMan = {
  name: 'Mega Man',
  series: megaManSeries,
  icon: MegaManHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 86,
      fallSpeed: 86,
      runSpeed: 42,
      dashSpeed: 81,
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
  picture: MegaManSSBU,
};

export default megaMan;
