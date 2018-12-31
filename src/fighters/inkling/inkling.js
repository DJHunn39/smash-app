import getUnofficialStat from '../../helpers/getUnofficialStat';
import splatoonSeries from '../../series/splatoonSeries/splatoonSeries';
import InklingHeadSSBU from './InklingHeadSSBU.png';
import InklingSSBU from './Inkling_SSBU.png';

const inkling = {
  name: 'Inkling',
  series: splatoonSeries,
  icon: InklingHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 90,
      fallSpeed: 75,
      runSpeed: 50,
      dashSpeed: 88,
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
  picture: InklingSSBU,
};

export default inkling;
