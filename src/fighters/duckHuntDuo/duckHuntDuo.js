import getUnofficialStat from '../../helpers/getUnofficialStat';
import duckHuntSeries from '../../series/duckHuntSeries/duckHuntSeries';
import DuckHuntDuoHeadSSBU from './DuckHuntHeadSSBU.png';
import DuckHuntDuoSSBU from './Duck_Hunt_SSBU.png';

const duckHuntDuo = {
  name: 'Duck Hunt Duo',
  series: duckHuntSeries,
  icon: DuckHuntDuoHeadSSBU,
  stats: {
    official: {
      weight: 64,
      airSpeed: 86,
      fallSpeed: 79,
      runSpeed: 47,
      dashSpeed: 72,
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
  picture: DuckHuntDuoSSBU,
};

export default duckHuntDuo;
