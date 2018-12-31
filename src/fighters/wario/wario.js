import warioSeries from '../../series/warioSeries/warioSeries';
import WarioHeadSSBU from './WarioHeadSSBU.png';
import WarioSSBU from './Wario_SSBU.png';

const wario = {
  name: 'Wario',
  series: warioSeries,
  icon: WarioHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 95,
      fallSpeed: 77,
      runSpeed: 43,
      dashSpeed: 76,
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
  picture: WarioSSBU,
};

export default wario;
