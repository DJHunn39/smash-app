import getUnofficialStat from '../../helpers/getUnofficialStat';
import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import ZeldaHeadSSBU from './ZeldaHeadSSBU.png';
import ZeldaSSBU from './Zelda_SSBU.png';

const zelda = {
  name: 'Zelda',
  series: zeldaSeries,
  icon: ZeldaHeadSSBU,
  stats: {
    official: {
      weight: 63,
      airSpeed: 81,
      fallSpeed: 64,
      runSpeed: 37,
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
  picture: ZeldaSSBU,
};

export default zelda;
