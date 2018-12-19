import RichterSymbol from '../../seriesIcons/RichterSymbol.svg';
import RichterHeadSSBU from './RichterHeadSSBU.png';
import RichterSSBU from './Richter_SSBU.png';

const richter = {
  name: 'Richter',
  series: {
    icon: CastlevaniaSymbol,
    name: 'Richter',
  },
  icon: RichterHeadSSBU,
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
  picture: RichterSSBU,
};

export default richter;
