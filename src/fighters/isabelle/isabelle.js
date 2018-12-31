import animalCrossingSeries from '../../series/animalCrossingSeries/animalCrossingSeries';
import IsabelleHeadSSBU from './IsabelleHeadSSBU.png';
import IsabelleSSBU from './Isabelle_SSBU.png';

const isabelle = {
  name: 'Isabelle',
  series: animalCrossingSeries,
  icon: IsabelleHeadSSBU,
  stats: {
    official: {
      weight: 65,
      airSpeed: 76,
      fallSpeed: 62,
      runSpeed: 38,
      dashSpeed: 75,
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
  picture: IsabelleSSBU,
};

export default isabelle;
