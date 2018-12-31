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
