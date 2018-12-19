import IvysaurSymbol from '../seriesIcons/IvysaurSymbol.svg';
import IvysaurHeadSSBU from './IvysaurHeadSSBU.png';
import IvysaurSSBU from './Ivysaur_SSBU.png';

const ivysaur = {
  name: 'Ivysaur',
  series: {
    icon: PokemonSymbol,
    name: 'Ivysaur',
  },
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
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: IvysaurSSBU,
};

export default ivysaur;
