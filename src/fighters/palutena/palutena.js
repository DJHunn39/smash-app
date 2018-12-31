import getUnofficialStats from '../../helpers/getUnofficialStats';
import kidIcarusSeries from '../../series/kidIcarusSeries/kidIcarusSeries';
import PalutenaHeadSSBU from './PalutenaHeadSSBU.png';
import PalutenaSSBU from './Palutena_SSBU.png';

const filename = 'palutena';

const palutena = {
  name: 'Palutena',
  series: kidIcarusSeries,
  icon: PalutenaHeadSSBU,
  stats: {
    official: {
      weight: 67,
      airSpeed: 74,
      fallSpeed: 74,
      runSpeed: 54,
      dashSpeed: 84,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: PalutenaSSBU,
};

export default palutena;
