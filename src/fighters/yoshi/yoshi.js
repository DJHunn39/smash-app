import yoshiSeries from '../../series/yoshiSeries/yoshiSeries';
import YoshiHeadSSBU from './YoshiHeadSSBU.png';
import YoshiSSBU from './Yoshi_SSBU.png';

const yoshi = {
  name: 'Yoshi',
  series: yoshiSeries,
  icon: YoshiHeadSSBU,
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
  picture: YoshiSSBU,
};

export default yoshi;
