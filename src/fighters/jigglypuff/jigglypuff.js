import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import JigglypuffHeadSSBU from './JigglypuffHeadSSBU.png';
import JigglypuffSSBU from './Jigglypuff_SSBU.png';

const filename = 'jigglypuff';

const jigglypuff = {
  name: 'Jigglypuff',
  series: pokemonSeries,
  icon: JigglypuffHeadSSBU,
  stats: {
    official: {
      weight: 50,
      airSpeed: 99,
      fallSpeed: 47,
      runSpeed: 33,
      dashSpeed: 68,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: JigglypuffSSBU,
};

export default jigglypuff;
