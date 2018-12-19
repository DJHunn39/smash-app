import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import DarkPitHeadSSBU from './DarkPitHeadSSBU.png';
import DarkPitSSBU from './Dark_Pit_SSBU.png';

const darkPit = {
  name: 'Dark Pit',
  series: kidIcarusSeries,
  icon: DarkPitHeadSSBU,
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
  picture: DarkPitSSBU,
};

export default darkPit;
