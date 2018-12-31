import getUnofficialStat from '../../helpers/getUnofficialStat';
import sonicSeries from '../../series/sonicSeries/sonicSeries';
import SonicHeadSSBU from './SonicHeadSSBU.png';
import SonicSSBU from './Sonic_SSBU.png';

const sonic = {
  name: 'Sonic',
  series: sonicSeries,
  icon: SonicHeadSSBU,
  stats: {
    official: {
      weight: 64,
      airSpeed: 90,
      fallSpeed: 79,
      runSpeed: 100,
      dashSpeed: 95,
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
  picture: SonicSSBU,
};

export default sonic;
