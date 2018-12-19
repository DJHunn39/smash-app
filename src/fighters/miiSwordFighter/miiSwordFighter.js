import MiiSwordFighterSymbol from '../../seriesIcons/MiiSwordFighterSymbol.svg';
import MiiSwordFighterHeadSSBU from './MiiSwordFighterHeadSSBU.png';
import MiiSwordFighterSSBU from './Mii_SwordFighter_SSBU.png';

const miiSwordFighter = {
  name: 'MiiSwordFighter',
  series: {
    icon: SmashBrosSymbol,
    name: 'MiiSwordFighter',
  },
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
  picture: MiiSwordFighterSSBU,
};

export default miiSwordFighter;
