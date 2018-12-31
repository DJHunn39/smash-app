import iceClimbersSeries from '../../series/iceClimbersSeries/iceClimbersSeries';
import IceClimbersHeadSSBU from './IceClimbersHeadSSBU.png';
import IceClimbersSSBU from './Ice_Climbers_SSBU.png';

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
  picture: IceClimbersSSBU,
};

export default iceClimbers;
