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
  picture: IvysaurSSBU,
};

export default ivysaur;
