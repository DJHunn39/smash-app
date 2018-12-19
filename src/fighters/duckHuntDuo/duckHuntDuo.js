import DuckHuntDuoSymbol from '../seriesIcons/DuckHuntDuoSymbol.svg';
import DuckHuntDuoHeadSSBU from './DuckHuntHeadSSBU.png';
import DuckHuntDuoSSBU from './Duck_Hunt_SSBU.png';

const duckHuntDuo = {
  name: 'DuckHuntDuo',
  series: {
    icon: DuckHuntSymbol,
    name: 'DuckHuntDuo',
  },
  icon: DuckHuntDuoHeadSSBU,
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
  picture: DuckHuntDuoSSBU,
};

export default duckHuntDuo;
