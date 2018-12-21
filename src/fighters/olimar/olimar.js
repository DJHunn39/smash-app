import pikminSeries from '../../series/pikminSeries/pikminSeries';
import OlimarHeadSSBU from './OlimarHeadSSBU.png';
import OlimarSSBU from './Olimar_SSBU.png';

const olimar = {
  name: 'Olimar',
  series: pikminSeries,
  icon: OlimarHeadSSBU,
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
  picture: OlimarSSBU,
};

export default olimar;
