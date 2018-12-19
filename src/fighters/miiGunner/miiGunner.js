import SmashBrosSymbol from '../../seriesIcons/SmashBrosSymbol.svg';
import MiiGunnerHeadSSBU from './MiiGunnerHeadSSBU.png';
import MiiGunnerSSBU from './Mii_Gunner_SSBU.png';

const miiGunner = {
  name: 'MiiGunner',
  series: {
    icon: SmashBrosSymbol,
    name: 'MiiGunner',
  },
  icon: MiiGunnerHeadSSBU,
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
  picture: MiiGunnerSSBU,
};

export default miiGunner;
