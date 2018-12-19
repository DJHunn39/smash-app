import megaManSeries from '../../series/megaManSeries/megaManSeries';
import MegaManHeadSSBU from './MegaManHeadSSBU.png';
import MegaManSSBU from './Mega_Man_SSBU.png';

const megaMan = {
  name: 'Mega Man',
  series: megaManSeries,
  icon: MegaManHeadSSBU,
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
        finalSmash: 0,
      },
      jack: {
        fun: 0,
        power: 0,
        nostalgia: 0,
        recovery: 0,
        finalSmash: 0,
      }
    },
  },
  picture: MegaManSSBU,
};

export default megaMan;
