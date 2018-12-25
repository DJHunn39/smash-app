import donkeyKongSeries from '../../series/donkeyKongSeries/donkeyKongSeries';
import DiddyKongHeadSSBU from './DiddyKongHeadSSBU.png';
import DiddyKongSSBU from './Diddy_Kong_SSBU.png';

const diddyKong = {
  name: 'Diddy Kong',
  series: donkeyKongSeries,
  icon: DiddyKongHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 69,
      fallSpeed: 83,
      runSpeed: 52,
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
  picture: DiddyKongSSBU,
};

export default diddyKong;
