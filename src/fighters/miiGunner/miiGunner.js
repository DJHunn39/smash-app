import getUnofficialStats from '../../helpers/getUnofficialStats';
import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiGunnerHeadSSBU from './MiiGunnerHeadSSBU.png';
import MiiGunnerSSBU from './Mii_Gunner_SSBU.png';

const filename = 'miiGunner';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: MiiGunnerSSBU,
};

export default miiGunner;
