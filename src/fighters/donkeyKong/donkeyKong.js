import getUnofficialStat from '../../helpers/getUnofficialStat';
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
  picture: DonkeyKongSSBU,
};

export default donkeyKong;
