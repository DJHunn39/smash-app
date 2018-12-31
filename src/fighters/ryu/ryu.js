import getUnofficialStat from '../../helpers/getUnofficialStat';
import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import RyuHeadSSBU from './RyuHeadSSBU.png';
import RyuSSBU from './Ryu_SSBU.png';

const ryu = {
  name: 'Ryu',
  series: streetFighterSeries,
  icon: RyuHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 83,
      fallSpeed: 76,
      runSpeed: 42,
      dashSpeed: 73,
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
  picture: RyuSSBU,
};

export default ryu;
