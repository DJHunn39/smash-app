import IsabelleSymbol from '../seriesIcons/IsabelleSymbol.svg';
import IsabelleHeadSSBU from './IsabelleHeadSSBU.png';
import IsabelleSSBU from './Isabelle_SSBU.png';

const isabelle = {
  name: 'Isabelle',
  series: {
    icon: AnimalCrossingSymbol,
    name: 'Isabelle',
  },
  icon: IsabelleHeadSSBU,
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
  picture: IsabelleSSBU,
};

export default isabelle;
