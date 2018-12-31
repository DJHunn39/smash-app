import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import FalcoHeadSSBU from './FalcoHeadSSBU.png';
import FalcoSSBU from './Falco_SSBU.png';

const falco = {
  name: 'Falco',
  series: starFoxSeries,
  icon: FalcoHeadSSBU,
  stats: {
    official: {
      weight: 61,
      airSpeed: 73,
      fallSpeed: 86,
      runSpeed: 42,
      dashSpeed: 84,
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
  picture: FalcoSSBU,
};

export default falco;
