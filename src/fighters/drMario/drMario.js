import getUnofficialStat from '../../helpers/getUnofficialStat';
import marioSeries from '../../series/marioSeries/marioSeries';
import DrMarioHeadSSBU from './DrMarioHeadSSBU.png';
import DrMarioSSBU from './Dr_Mario_SSBU.png';

const drMario = {
  name: 'Dr Mario',
  series: marioSeries,
  icon: DrMarioHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 90,
      fallSpeed: 71,
      runSpeed: 46,
      dashSpeed: 80,
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
  picture: DrMarioSSBU,
};

export default drMario;
