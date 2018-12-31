import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import LucarioHeadSSBU from './LucarioHeadSSBU.png';
import LucarioSSBU from './Lucario_SSBU.png';

const lucario = {
  name: 'Lucario',
  series: pokemonSeries,
  icon: LucarioHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 95,
      fallSpeed: 80,
      runSpeed: 44,
      dashSpeed: 93,
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
  picture: LucarioSSBU,
};

export default lucario;
