import getUnofficialStat from '../../helpers/getUnofficialStat';
import fZeroSeries from '../../series/fZeroSeries/fZeroSeries';
import CaptainFalconHeadSSBU from './CaptainFalconHeadSSBU.png';
import CaptainFalconSSBU from './Captain_Falcon_SSBU.png';

const captainFalcon = {
  name: 'Captain Falcon',
  series: fZeroSeries,
  icon: CaptainFalconHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 90,
      fallSpeed: 89,
      runSpeed: 66,
      dashSpeed: 82,
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
  picture: CaptainFalconSSBU,
};

export default captainFalcon;
