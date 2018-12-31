import getUnofficialStats from '../../helpers/getUnofficialStats';
import pacmanSeries from '../../series/pacmanSeries/pacmanSeries';
import PacManHeadSSBU from './Pac-ManHeadSSBU.png';
import PacManSSBU from './Pac_Man_SSBU.png';

const filename = 'pacMan';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: PacManSSBU,
};

export default pacMan;
