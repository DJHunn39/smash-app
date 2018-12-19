import RyuSymbol from '../seriesIcons/RyuSymbol.svg';
import RyuHeadSSBU from './RyuHeadSSBU.png';
import RyuSSBU from './Ryu_SSBU.png';

const ryu = {
  name: 'Ryu',
  series: {
    icon: StreetFighterSymbol,
    name: 'Ryu',
  },
  icon: RyuHeadSSBU,
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
  picture: RyuSSBU,
};

export default ryu;
