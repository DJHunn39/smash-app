import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import IvysaurHeadSSBU from './IvysaurHeadSSBU.png';
import IvysaurSSBU from './Ivysaur_SSBU.png';

const filename = 'ivysaur';

const ivysaur = {
  name: 'Ivysaur',
  series: pokemonSeries,
  icon: IvysaurHeadSSBU,
  stats: {
    official: {
      weight: 71,
      airSpeed: 74,
      fallSpeed: 66,
      runSpeed: 41,
      dashSpeed: 79,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: IvysaurSSBU,
};

export default ivysaur;
