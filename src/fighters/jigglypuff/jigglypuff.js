import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import JigglypuffHeadSSBU from './JigglypuffHeadSSBU.png';
import JigglypuffSSBU from './Jigglypuff_SSBU.png';

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
  picture: JigglypuffSSBU,
};

export default jigglypuff;
