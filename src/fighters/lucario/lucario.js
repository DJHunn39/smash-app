import PokemonSymbol from '../../seriesIcons/PokemonSymbol.svg';
import LucarioHeadSSBU from './LucarioHeadSSBU.png';
import LucarioSSBU from './Lucario_SSBU.png';

const lucario = {
  name: 'Lucario',
  series: {
    icon: PokemonSymbol,
    name: 'Lucario',
  },
  icon: LucarioHeadSSBU,
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
  picture: LucarioSSBU,
};

export default lucario;
