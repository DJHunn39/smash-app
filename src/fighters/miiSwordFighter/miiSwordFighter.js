import getUnofficialStat from '../../helpers/getUnofficialStat';
import smashBrosSeries from '../../series/smashBrosSeries/smashBrosSeries';
import MiiSwordFighterHeadSSBU from './MiiSwordfighterHeadSSBU.png';
import MiiSwordFighterSSBU from './Mii_Swordfighter_SSBU.png';

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
  picture: MiiSwordFighterSSBU,
};

export default miiSwordFighter;
