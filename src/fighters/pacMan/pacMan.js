import getUnofficialStat from '../../helpers/getUnofficialStat';
import pacmanSeries from '../../series/pacmanSeries/pacmanSeries';
import PacManHeadSSBU from './Pac-ManHeadSSBU.png';
import PacManSSBU from './Pac_Man_SSBU.png';

const pacMan = {
  name: 'Pac-Man',
  series: pacmanSeries,
  icon: PacManHeadSSBU,
  stats: {
    official: {
      weight: 70,
      airSpeed: 81,
      fallSpeed: 64,
      runSpeed: 43,
      dashSpeed: 77,
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
  picture: PacManSSBU,
};

export default pacMan;
