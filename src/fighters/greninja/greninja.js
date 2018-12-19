import GreninjaSymbol from '../../seriesIcons/GreninjaSymbol.svg';
import GreninjaHeadSSBU from './GreninjaHeadSSBU.png';
import GreninjaSSBU from './Greninja_SSBU.png';

const greninja = {
  name: 'Greninja',
  series: {
    icon: PokemonSymbol,
    name: 'Greninja',
  },
  icon: GreninjaHeadSSBU,
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
  picture: GreninjaSSBU,
};

export default greninja;
