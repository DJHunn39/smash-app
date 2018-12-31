import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import IncineroarHeadSSBU from './IncineroarHeadSSBU.png';
import IncineroarSSBU from './Incineroar_SSBU.png';

const incineroar = {
  name: 'Incineroar',
  series: pokemonSeries,
  icon: IncineroarHeadSSBU,
  stats: {
    official: {
      weight: 86,
      airSpeed: 65,
      fallSpeed: 84,
      runSpeed: 31,
      dashSpeed: 73,
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
  picture: IncineroarSSBU,
};

export default incineroar;
