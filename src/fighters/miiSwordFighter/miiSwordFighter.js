import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiSwordFighterHeadSSBU from './MiiSwordfighterHeadSSBU.png';
import MiiSwordFighterSSBU from './Mii_Swordfighter_SSBU.png';

const miiSwordFighter = {
  name: 'Mii Swordfighter',
  series: smashBrosSeries,
  icon: MiiSwordFighterHeadSSBU,
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
  picture: MiiSwordFighterSSBU,
};

export default miiSwordFighter;
