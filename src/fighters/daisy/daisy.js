import getUnofficialStat from '../../helpers/getUnofficialStat';
import marioSeries from '../../series/marioSeries/marioSeries';
import DaisyHeadSSBU from './DaisyHeadSSBU.png';
import DaisySSBU from './Daisy_SSBU.png';

const daisy = {
  name: 'Daisy',
  series: marioSeries,
  icon: DaisyHeadSSBU,
  stats: {
    official: {
      weight: 66,
      airSpeed: 77,
      fallSpeed: 57,
      runSpeed: 41,
      dashSpeed: 75,
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
  picture: DaisySSBU,
};

export default daisy;
