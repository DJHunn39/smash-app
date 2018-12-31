import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: MiiGunnerSSBU,
};

export default miiGunner;
