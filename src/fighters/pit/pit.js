import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PitHeadSSBU from './PitHeadSSBU.png';
import PitSSBU from './Pit_SSBU.png';

const pit = {
  name: 'Pit',
  series: kidIcarusSeries,
  icon: PitHeadSSBU,
  stats: {
    official: {
      weight: 71,
      airSpeed: 70,
      fallSpeed: 70,
      runSpeed: 47,
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
  picture: PitSSBU,
};

export default pit;
