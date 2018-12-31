import getUnofficialStats from '../../helpers/getUnofficialStats';
import donkeyKongSeries from '../../series/donkeyKongSeries/donkeyKongSeries';
import DonkeyKongHeadSSBU from './DonkeyKongHeadSSBU.png';
import DonkeyKongSSBU from './Donkey_Kong_SSBU.png';

const filename = 'donkeyKong';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: DonkeyKongSSBU,
};

export default donkeyKong;
