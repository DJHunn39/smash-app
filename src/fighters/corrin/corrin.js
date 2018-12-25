import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import CorrinHeadSSBU from './CorrinHeadSSBU.png';
import CorrinSSBU from './Corrin_SSBU.png';

const corrin = {
  name: 'Corrin',
  series: fireEmblemSeries,
  icon: CorrinHeadSSBU,
  stats: {
    official: {
      weight: 73,
      airSpeed: 76,
      fallSpeed: 79,
      runSpeed: 41,
      dashSpeed: 78,
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
  picture: CorrinSSBU,
};

export default corrin;
