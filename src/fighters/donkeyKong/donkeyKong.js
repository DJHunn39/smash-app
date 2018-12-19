import DKSymbol from '../../seriesIcons/DKSymbol.svg';
import DonkeyKongHeadSSBU from './DonkeyKongHeadSSBU.png';
import DonkeyKongSSBU from './Donkey_Kong_SSBU.png';

const donkeyKong = {
  name: 'DonkeyKong',
  series: {
    icon: DKSymbol,
    name: 'DonkeyKong',
  },
  icon: DonkeyKongHeadSSBU,
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
  picture: DonkeyKongSSBU,
};

export default donkeyKong;
