import NessSymbol from '../../seriesIcons/NessSymbol.svg';
import NessHeadSSBU from './NessHeadSSBU.png';
import NessSSBU from './Ness_SSBU.png';

const ness = {
  name: 'Ness',
  series: {
    icon: EarthboundSymbol,
    name: 'Ness',
  },
  icon: NessHeadSSBU,
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
  picture: NessSSBU,
};

export default ness;
