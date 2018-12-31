import getUnofficialStats from '../../helpers/getUnofficialStats';
import metalGearSeries from '../../series/metalGearSeries/metalGearSeries';
import SnakeHeadSSBU from './SnakeHeadSSBU.png';
import SnakeSSBU from './Snake_SSBU.png';

const filename = 'snake';

const snake = {
  name: 'Snake',
  series: metalGearSeries,
  icon: SnakeHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 73,
      fallSpeed: 82,
      runSpeed: 41,
      dashSpeed: 73,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: SnakeSSBU,
};

export default snake;
