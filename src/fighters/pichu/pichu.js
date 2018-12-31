import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import PichuHeadSSBU from './PichuHeadSSBU.png';
import PichuSSBU from './Pichu_SSBU.png';

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
  picture: PichuSSBU,
};

export default pichu;
