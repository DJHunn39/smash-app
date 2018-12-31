import splatoonSeries from '../../series/splatoonSeries/splatoonSeries';
import InklingHeadSSBU from './InklingHeadSSBU.png';
import InklingSSBU from './Inkling_SSBU.png';

const inkling = {
  name: 'Inkling',
  series: splatoonSeries,
  icon: InklingHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 90,
      fallSpeed: 75,
      runSpeed: 50,
      dashSpeed: 88,
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
  picture: InklingSSBU,
};

export default inkling;
