import gameWatchSeries from '../../series/gameWatchSeries/gameWatchSeries';
import MrGameWatchHeadSSBU from './MrGameWatchHeadSSBU.png';
import MrGameWatchSSBU from './Mr_Game_Watch_SSBU.png';

const mrGameAndWatch = {
  name: 'Mr Game & Watch',
  series: gameWatchSeries,
  icon: MrGameWatchHeadSSBU,
  stats: {
    official: {
      weight: 56,
      airSpeed: 88,
      fallSpeed: 59,
      runSpeed: 44,
      dashSpeed: 82,
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
  picture: MrGameWatchSSBU,
};

export default mrGameAndWatch;
