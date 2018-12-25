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
  picture: DuckHuntDuoSSBU,
};

export default duckHuntDuo;
