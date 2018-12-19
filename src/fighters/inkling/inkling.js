import splatoonSeries from '../../series/splatoonSeries/splatoonSeries';
import InklingHeadSSBU from './InklingHeadSSBU.png';
import InklingSSBU from './Inkling_SSBU.png';

const inkling = {
  name: 'Inkling',
  series: splatoonSeries,
  icon: InklingHeadSSBU,
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
  picture: InklingSSBU,
};

export default inkling;
