import getUnofficialStats from '../../helpers/getUnofficialStats';
import donkeyKongSeries from '../../series/donkeyKongSeries/donkeyKongSeries';
import DiddyKongHeadSSBU from './DiddyKongHeadSSBU.png';
import DiddyKongSSBU from './Diddy_Kong_SSBU.png';

const filename = 'diddyKong';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: DiddyKongSSBU,
};

export default diddyKong;
