import pikminSeries from '../../series/pikminSeries/pikminSeries';
import OlimarHeadSSBU from './OlimarHeadSSBU.png';
import OlimarSSBU from './Olimar_SSBU.png';

const olimar = {
  name: 'Olimar',
  series: pikminSeries,
  icon: OlimarHeadSSBU,
  stats: {
    official: {
      weight: 59,
      airSpeed: 64,
      fallSpeed: 64,
      runSpeed: 42,
      dashSpeed: 66,
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
  picture: OlimarSSBU,
};

export default olimar;
