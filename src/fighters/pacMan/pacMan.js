import pacmanSeries from '../../series/pacmanSeries/pacmanSeries';
import PacManHeadSSBU from './Pac-ManHeadSSBU.png';
import PacManSSBU from './Pac_Man_SSBU.png';

const pacMan = {
  name: 'Pac-Man',
  series: pacmanSeries,
  icon: PacManHeadSSBU,
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
  picture: PacManSSBU,
};

export default pacMan;
