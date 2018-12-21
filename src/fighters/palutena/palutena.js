import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PalutenaHeadSSBU from './PalutenaHeadSSBU.png';
import PalutenaSSBU from './Palutena_SSBU.png';

const palutena = {
  name: 'Palutena',
  series: kidIcarusSeries,
  icon: PalutenaHeadSSBU,
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
  picture: PalutenaSSBU,
};

export default palutena;
