import GameWatchSymbol from '../../seriesIcons/GameWatchSymbol.svg';
import MrGameWatchHeadSSBU from './MrGameWatchHeadSSBU.png';
import MrGameWatchSSBU from './Mr_Game_Watch_SSBU.png';

const mrGameAndWatch = {
  name: 'MrGameWatch',
  series: {
    icon: GameWatchSymbol,
    name: 'Mr Game & Watch',
  },
  icon: MrGameWatchHeadSSBU,
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
  picture: MrGameWatchSSBU,
};

export default mrGameAndWatch;
