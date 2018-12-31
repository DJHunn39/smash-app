import getUnofficialStat from '../../helpers/getUnofficialStat';
import earthboundSeries from '../../series/earthboundSeries/earthboundSeries';
import NessHeadSSBU from './NessHeadSSBU.png';
import NessSSBU from './Ness_SSBU.png';

const ness = {
  name: 'Ness',
  series: earthboundSeries,
  icon: NessHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 75,
      fallSpeed: 62,
      runSpeed: 42,
      dashSpeed: 75,
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
  picture: NessSSBU,
};

export default ness;
