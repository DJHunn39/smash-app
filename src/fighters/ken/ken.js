import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import KenHeadSSBU from './KenHeadSSBU.png';
import KenSSBU from './Ken_SSBU.png';

const ken = {
  name: 'Ken',
  series: streetFighterSeries,
  icon: KenHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 83,
      fallSpeed: 76,
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
