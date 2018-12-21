import streetFighterSeries from '../../series/streetFighterSeries/streetFighterSeries';
import RyuHeadSSBU from './RyuHeadSSBU.png';
import RyuSSBU from './Ryu_SSBU.png';

const ryu = {
  name: 'Ryu',
  series: streetFighterSeries,
  icon: RyuHeadSSBU,
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
  picture: RyuSSBU,
};

export default ryu;
