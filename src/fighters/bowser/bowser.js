import getUnofficialStats from '../../helpers/getUnofficialStats';
import marioSeries from '../../series/marioSeries/marioSeries';
import BowserHeadSSBU from './BowserHeadSSBU.png';
import BowserSSBU from './Bowser_SSBU.png';

const filename = 'bowser';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: BowserSSBU,
};

export default bowser;
