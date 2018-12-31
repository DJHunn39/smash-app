import getUnofficialStats from '../../helpers/getUnofficialStats';
import iceClimbersSeries from '../../series/iceClimbersSeries/iceClimbersSeries';
import IceClimbersHeadSSBU from './IceClimbersHeadSSBU.png';
import IceClimbersSSBU from './Ice_Climbers_SSBU.png';

const filename = 'iceClimbers';

const iceClimbers = {
  name: 'Ice Climbers',
  series: iceClimbersSeries,
  icon: IceClimbersHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 62,
      fallSpeed: 62,
      runSpeed: 40,
      dashSpeed: 69,
    },
    unofficial: getUnofficialStats(filename),
  },
  picture: IceClimbersSSBU,
};

export default iceClimbers;
