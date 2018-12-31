import getUnofficialStats from '../../helpers/getUnofficialStats';
import duckHuntSeries from '../../series/duckHuntSeries/duckHuntSeries';
import DuckHuntDuoHeadSSBU from './DuckHuntHeadSSBU.png';
import DuckHuntDuoSSBU from './Duck_Hunt_SSBU.png';

const filename = 'duckHuntDuo';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: DuckHuntDuoSSBU,
};

export default duckHuntDuo;
