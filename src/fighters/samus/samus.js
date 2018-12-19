import SamusSymbol from '../../seriesIcons/SamusSymbol.svg';
import SamusHeadSSBU from './SamusHeadSSBU.png';
import SamusSSBU from './Samus_SSBU.png';

const samus = {
  name: 'Samus',
  series: {
    icon: MetroidSymbol,
    name: 'Samus',
  },
  icon: SamusHeadSSBU,
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
  picture: SamusSSBU,
};

export default samus;
