import LucinaSymbol from '../seriesIcons/LucinaSymbol.svg';
import LucinaHeadSSBU from './LucinaHeadSSBU.png';
import LucinaSSBU from './Lucina_SSBU.png';

const lucina = {
  name: 'Lucina',
  series: {
    icon: FireEmblemSymbol,
    name: 'Lucina',
  },
  icon: LucinaHeadSSBU,
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
  picture: LucinaSSBU,
};

export default lucina;
