import getUnofficialStats from '../../helpers/getUnofficialStats';
import animalCrossingSeries from '../../series/animalCrossingSeries/animalCrossingSeries';
import IsabelleHeadSSBU from './IsabelleHeadSSBU.png';
import IsabelleSSBU from './Isabelle_SSBU.png';

const filename = 'isabelle';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: IsabelleSSBU,
};

export default isabelle;
