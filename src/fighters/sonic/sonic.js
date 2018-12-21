import sonicSeries from '../../series/sonicSeries/sonicSeries';
import SonicHeadSSBU from './SonicHeadSSBU.png';
import SonicSSBU from './Sonic_SSBU.png';

const sonic = {
  name: 'Sonic',
  series: sonicSeries,
  icon: SonicHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
    },
    unofficial: {
      danny: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        final: 0,
      }
    },
  },
  picture: SonicSSBU,
};

export default sonic;
