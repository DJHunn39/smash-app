import RidleySymbol from '../seriesIcons/RidleySymbol.svg';
import RidleyHeadSSBU from './RidleyHeadSSBU.png';
import RidleySSBU from './Ridley_SSBU.png';

const ridley = {
  name: 'Ridley',
  series: {
    icon: MetroidSymbol,
    name: 'Ridley',
  },
  icon: RidleyHeadSSBU,
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
  picture: RidleySSBU,
};

export default ridley;
