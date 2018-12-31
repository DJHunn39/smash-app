import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import GanondorfHeadSSBU from './GanondorfHeadSSBU.png';
import GanondorfSSBU from './Ganondorf_SSBU.png';

const ganondorf = {
  name: 'Ganondorf',
  series: zeldaSeries,
  icon: GanondorfHeadSSBU,
  stats: {
    official: {
      weight: 87,
      airSpeed: 62,
      fallSpeed: 79,
      runSpeed: 35,
      dashSpeed: 77,
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
  picture: GanondorfSSBU,
};

export default ganondorf;
