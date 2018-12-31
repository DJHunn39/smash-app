import getUnofficialStats from '../../helpers/getUnofficialStats';
import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import DarkPitHeadSSBU from './DarkPitHeadSSBU.png';
import DarkPitSSBU from './Dark_Pit_SSBU.png';

const filename = 'darkPit';

const darkPit = {
  name: 'Dark Pit',
  series: kidIcarusSeries,
  icon: DarkPitHeadSSBU,
  stats: {
    official: {
      weight: 71,
      airSpeed: 70,
      fallSpeed: 70,
      runSpeed: 47,
      dashSpeed: 86,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: DarkPitSSBU,
};

export default darkPit;
