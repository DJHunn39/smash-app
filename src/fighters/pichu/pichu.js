import getUnofficialStats from '../../helpers/getUnofficialStats';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PichuHeadSSBU from './PichuHeadSSBU.png';
import PichuSSBU from './Pichu_SSBU.png';

const filename = 'pichu';

const pichu = {
  name: 'Pichu',
  series: pokemonSeries,
  icon: PichuHeadSSBU,
  stats: {
    official: {
      weight: 46,
      airSpeed: 77,
      fallSpeed: 90,
      runSpeed: 49,
      dashSpeed: 82,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: PichuSSBU,
};

export default pichu;
