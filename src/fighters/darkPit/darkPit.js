import getUnofficialStat from '../../helpers/getUnofficialStat';
import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import DarkPitHeadSSBU from './DarkPitHeadSSBU.png';
import DarkPitSSBU from './Dark_Pit_SSBU.png';

const darkPit = {
  name: 'Dark Pit',
  series: kidIcarusSeries,
  icon: DarkPitHeadSSBU,
  stats: {
    official: {
      weight: 71,
      airSpeed: 70,
      fallSpeed: 70,
      runSpeed: 47,
      dashSpeed: 86,
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
  picture: DarkPitSSBU,
};

export default darkPit;
