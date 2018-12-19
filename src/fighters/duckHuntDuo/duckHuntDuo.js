import duckHuntSeries from '../../series/duckHuntSeries/duckHuntSeries';
import DuckHuntDuoHeadSSBU from './DuckHuntHeadSSBU.png';
import DuckHuntDuoSSBU from './Duck_Hunt_SSBU.png';

const duckHuntDuo = {
  name: 'Duck Hunt Duo',
  series: duckHuntSeries,
  icon: DuckHuntDuoHeadSSBU,
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
  picture: DuckHuntDuoSSBU,
};

export default duckHuntDuo;
