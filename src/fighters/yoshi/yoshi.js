import getUnofficialStat from '../../helpers/getUnofficialStat';
import yoshiSeries from '../../series/yoshiSeries/yoshiSeries';
import YoshiHeadSSBU from './YoshiHeadSSBU.png';
import YoshiSSBU from './Yoshi_SSBU.png';

const yoshi = {
  name: 'Yoshi',
  series: yoshiSeries,
  icon: YoshiHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 100,
      fallSpeed: 61,
      runSpeed: 53,
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
  picture: YoshiSSBU,
};

export default yoshi;
