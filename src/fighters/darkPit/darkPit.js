import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import DarkPitHeadSSBU from './DarkPitHeadSSBU.png';
import DarkPitSSBU from './Dark_Pit_SSBU.png';

const darkPit = {
  name: 'Dark Pit',
  series: kidIcarusSeries,
  icon: DarkPitHeadSSBU,
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
  picture: DarkPitSSBU,
};

export default darkPit;
