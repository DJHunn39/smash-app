import PokemonSymbol from '../../seriesIcons/PokemonSymbol.svg';
import IncineroarHeadSSBU from './IncineroarHeadSSBU.png';
import IncineroarSSBU from './Incineroar_SSBU.png';

const incineroar = {
  name: 'Incineroar',
  series: {
    icon: PokemonSymbol,
    name: 'Incineroar',
  },
  icon: IncineroarHeadSSBU,
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
  picture: IncineroarSSBU,
};

export default incineroar;
