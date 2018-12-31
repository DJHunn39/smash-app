import getUnofficialStat from '../../helpers/getUnofficialStat';
import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PitHeadSSBU from './PitHeadSSBU.png';
import PitSSBU from './Pit_SSBU.png';

const pit = {
  name: 'Pit',
  series: kidIcarusSeries,
  icon: PitHeadSSBU,
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
  picture: PitSSBU,
};

export default pit;
