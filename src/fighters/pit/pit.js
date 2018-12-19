import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PitHeadSSBU from './PitHeadSSBU.png';
import PitSSBU from './Pit_SSBU.png';

const pit = {
  name: 'Pit',
  series: kidIcarusSeries,
  icon: PitHeadSSBU,
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
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: PitSSBU,
};

export default pit;
