import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: MrGameWatchSSBU,
};

export default mrGameAndWatch;
