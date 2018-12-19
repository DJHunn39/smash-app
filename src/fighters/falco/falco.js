import FalcoSymbol from '../../seriesIcons/FalcoSymbol.svg';
import FalcoHeadSSBU from './FalcoHeadSSBU.png';
import FalcoSSBU from './Falco_SSBU.png';

const falco = {
  name: 'Falco',
  series: {
    icon: StarFoxSymbol,
    name: 'Falco',
  },
  icon: FalcoHeadSSBU,
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
  picture: FalcoSSBU,
};

export default falco;
