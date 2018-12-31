import getUnofficialStats from '../../helpers/getUnofficialStats';
import gameWatchSeries from '../../series/gameWatchSeries/gameWatchSeries';
import MrGameWatchHeadSSBU from './MrGameWatchHeadSSBU.png';
import MrGameWatchSSBU from './Mr_Game_Watch_SSBU.png';

const filename = 'mrGameAndWatch';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: MrGameWatchSSBU,
};

export default mrGameAndWatch;
