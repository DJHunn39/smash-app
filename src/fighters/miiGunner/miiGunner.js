import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiGunnerHeadSSBU from './MiiGunnerHeadSSBU.png';
import MiiGunnerSSBU from './Mii_Gunner_SSBU.png';

const miiGunner = {
  name: 'Mii Gunner',
  series: smashBrosSeries,
  icon: MiiGunnerHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 69,
      fallSpeed: 69,
      runSpeed: 36,
      dashSpeed: 67,
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
  picture: MiiGunnerSSBU,
};

export default miiGunner;
