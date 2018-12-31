import getUnofficialStats from '../../helpers/getUnofficialStats';
import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiSwordFighterHeadSSBU from './MiiSwordfighterHeadSSBU.png';
import MiiSwordFighterSSBU from './Mii_Swordfighter_SSBU.png';

const filename = 'miiSwordFighter';

const miiSwordFighter = {
  name: 'Mii Swordfighter',
  series: smashBrosSeries,
  icon: MiiSwordFighterHeadSSBU,
  stats: {
    official: {
      weight: 74,
      airSpeed: 87,
      fallSpeed: 74,
      runSpeed: 41,
      dashSpeed: 72,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: MiiSwordFighterSSBU,
};

export default miiSwordFighter;
