import megaManSeries from '../../series/megaManSeries/megaManSeries';
import MegaManHeadSSBU from './MegaManHeadSSBU.png';
import MegaManSSBU from './Mega_Man_SSBU.png';

const megaMan = {
  name: 'Mega Man',
  series: megaManSeries,
  icon: MegaManHeadSSBU,
  stats: {
    official: {
      weight: 76,
      airSpeed: 86,
      fallSpeed: 86,
      runSpeed: 42,
      dashSpeed: 81,
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
  picture: MegaManSSBU,
};

export default megaMan;
