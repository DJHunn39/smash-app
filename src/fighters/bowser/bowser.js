import getUnofficialStat from '../../helpers/getUnofficialStat';
import marioSeries from '../../series/marioSeries/marioSeries';
import BowserHeadSSBU from './BowserHeadSSBU.png';
import BowserSSBU from './Bowser_SSBU.png';

const bowser = {
  name: 'Bowser',
  series: marioSeries,
  icon: BowserHeadSSBU,
  stats: {
    official: {
      weight: 100,
      airSpeed: 86,
      fallSpeed: 84,
      runSpeed: 51,
      dashSpeed: 93,
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
  picture: BowserSSBU,
};

export default bowser;
