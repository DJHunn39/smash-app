import getUnofficialStat from '../../helpers/getUnofficialStat';
import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import IvysaurHeadSSBU from './IvysaurHeadSSBU.png';
import IvysaurSSBU from './Ivysaur_SSBU.png';

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
  picture: IvysaurSSBU,
};

export default ivysaur;
