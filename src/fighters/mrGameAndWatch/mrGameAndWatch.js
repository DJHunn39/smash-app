import MrGame&WatchSymbol from '../seriesIcons/MrGame&WatchSymbol.svg';
import MrGame&WatchHeadSSBU from './MrGame&WatchHeadSSBU.png';
import MrGame&WatchSSBU from './Mr_Game_&_Watch_SSBU.png';

const mrGame&Watch = {
  name: 'MrGame&Watch',
  series: {
    icon: Game&WatchSymbol,
    name: 'MrGame&Watch',
  },
  icon: MrGame&WatchHeadSSBU,
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
  picture: MrGame&WatchSSBU,
};

export default mrGame&Watch;
