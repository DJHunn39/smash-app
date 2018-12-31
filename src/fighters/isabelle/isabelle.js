import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: IsabelleSSBU,
};

export default isabelle;
