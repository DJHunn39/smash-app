import getUnofficialStat from '../../helpers/getUnofficialStat';
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
  picture: DiddyKongSSBU,
};

export default diddyKong;
