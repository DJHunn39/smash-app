import DiddyKongSymbol from '../../seriesIcons/DiddyKongSymbol.svg';
import DiddyKongHeadSSBU from './DiddyKongHeadSSBU.png';
import DiddyKongSSBU from './Diddy_Kong_SSBU.png';

const diddyKong = {
  name: 'DiddyKong',
  series: {
    icon: DKSymbol,
    name: 'DiddyKong',
  },
  icon: DiddyKongHeadSSBU,
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
  picture: DiddyKongSSBU,
};

export default diddyKong;
