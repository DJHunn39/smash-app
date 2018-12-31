import fireEmblemSeries from '../../series/fireEmblemSeries/fireEmblemSeries';
import LucinaHeadSSBU from './LucinaHeadSSBU.png';
import LucinaSSBU from './Lucina_SSBU.png';

const lucina = {
  name: 'Lucina',
  series: fireEmblemSeries,
  icon: LucinaHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 80,
      fallSpeed: 75,
      runSpeed: 51,
      dashSpeed: 93,
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
  picture: LucinaSSBU,
};

export default lucina;
