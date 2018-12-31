import getUnofficialStats from '../../helpers/getUnofficialStats';
import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PitHeadSSBU from './PitHeadSSBU.png';
import PitSSBU from './Pit_SSBU.png';

const filename = 'pit';

const pit = {
  name: 'Pit',
  series: kidIcarusSeries,
  icon: PitHeadSSBU,
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
  picture: PitSSBU,
};

export default pit;
