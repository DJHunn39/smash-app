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
  picture: PacManSSBU,
};

export default pacMan;
