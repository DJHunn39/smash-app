import pokemonSeries from '../../series/pokemonSeries/pokemonSeries';
import IvysaurHeadSSBU from './IvysaurHeadSSBU.png';
import IvysaurSSBU from './Ivysaur_SSBU.png';

const ivysaur = {
  name: 'Ivysaur',
  series: pokemonSeries,
  icon: IvysaurHeadSSBU,
  stats: {
    official: {
      weight: 60,
      airSpeed: 76,
      fallSpeed: 84,
      runSpeed: 46,
      dashSpeed: 80,
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
