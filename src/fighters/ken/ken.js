import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import KenHeadSSBU from './KenHeadSSBU.png';
import KenSSBU from './Ken_SSBU.png';

const ken = {
  name: 'Ken',
  series: streetFighterSeries,
  icon: KenHeadSSBU,
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
  picture: KenSSBU,
};

export default ken;
