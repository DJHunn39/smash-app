import ZeldaSymbol from '../../seriesIcons/ZeldaSymbol.svg';
import SheikHeadSSBU from './SheikHeadSSBU.png';
import SheikSSBU from './Sheik_SSBU.png';

const sheik = {
  name: 'Sheik',
  series: {
    icon: ZeldaSymbol,
    name: 'Sheik',
  },
  icon: SheikHeadSSBU,
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
  picture: SheikSSBU,
};

export default sheik;
