import getUnofficialStat from '../../helpers/getUnofficialStat';
import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import FoxHeadSSBU from './FoxHeadSSBU.png';
import FoxSSBU from './Fox_SSBU.png';

const fox = {
  name: 'Fox',
  series: starFoxSeries,
  icon: FoxHeadSSBU,
  stats: {
    official: {
      weight: 57,
      airSpeed: 83,
      fallSpeed: 100,
      runSpeed: 62,
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
  picture: FoxSSBU,
};

export default fox;
