import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import SheikHeadSSBU from './SheikHeadSSBU.png';
import SheikSSBU from './Sheik_SSBU.png';

const sheik = {
  name: 'Sheik',
  series: zeldaSeries,
  icon: SheikHeadSSBU,
  stats: {
    official: {
      weight: 58,
      airSpeed: 86,
      fallSpeed: 83,
      runSpeed: 63,
      dashSpeed: 90,
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
  picture: SheikSSBU,
};

export default sheik;
