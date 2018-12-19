daimport GanondorfSymbol from '../../seriesIcons/GanondorfSymbol.svg';
import GanondorfHeadSSBU from './GanondorfHeadSSBU.png';
import GanondorfSSBU from './Ganondorf_SSBU.png';

const ganondorf = {
  name: 'Ganondorf',
  series: {
    icon: ZeldaSymbol,
    name: 'Ganondorf',
  },
  icon: GanondorfHeadSSBU,
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
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: GanondorfSSBU,
};

export default ganondorf;
