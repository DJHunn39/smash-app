import marioSeries from '../../series/marioSeries/marioSeries';
import DrMarioHeadSSBU from './DrMarioHeadSSBU.png';
import DrMarioSSBU from './Dr_Mario_SSBU.png';

const drMario = {
  name: 'Dr Mario',
  series: marioSeries,
  icon: DrMarioHeadSSBU,
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
  picture: DrMarioSSBU,
};

export default drMario;
