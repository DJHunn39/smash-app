import castlevaniaSeries from '../../series/castlevaniaSeries/castlevaniaSeries';
import RichterHeadSSBU from './RichterHeadSSBU.png';
import RichterSSBU from './Richter_SSBU.png';

const richter = {
  name: 'Richter',
  series: castlevaniaSeries,
  icon: RichterHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 70,
      fallSpeed: 88,
      runSpeed: 39,
      dashSpeed: 71,
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
  picture: RichterSSBU,
};

export default richter;
