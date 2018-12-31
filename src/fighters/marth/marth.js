import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import MarthHeadSSBU from './MarthHeadSSBU.png';
import MarthSSBU from './Marth_SSBU.png';

const marth = {
  name: 'Marth',
  series: fireEmblemSeries,
  icon: MarthHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 80,
      fallSpeed: 75,
      runSpeed: 51,
      dashSpeed: 93,
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
  picture: MarthSSBU,
};

export default marth;
