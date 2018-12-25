import donkeyKongSeries from '../../series/donkeyKongSeries/donkeyKongSeries';
import DonkeyKongHeadSSBU from './DonkeyKongHeadSSBU.png';
import DonkeyKongSSBU from './Donkey_Kong_SSBU.png';

const donkeyKong = {
  name: 'Donkey Kong',
  series: donkeyKongSeries,
  icon: DonkeyKongHeadSSBU,
  stats: {
    official: {
      weight: 94,
      airSpeed: 90,
      fallSpeed: 78,
      runSpeed: 49,
      dashSpeed: 86,
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
  picture: DonkeyKongSSBU,
};

export default donkeyKong;
