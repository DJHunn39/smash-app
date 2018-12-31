import getUnofficialStat from '../../helpers/getUnofficialStat';
import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PalutenaHeadSSBU from './PalutenaHeadSSBU.png';
import PalutenaSSBU from './Palutena_SSBU.png';

const palutena = {
  name: 'Palutena',
  series: kidIcarusSeries,
  icon: PalutenaHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 74,
      fallSpeed: 74,
      runSpeed: 54,
      dashSpeed: 84,
    },
    unofficial: {
      danny: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: PalutenaSSBU,
};

export default palutena;
