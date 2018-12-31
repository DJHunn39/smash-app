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
