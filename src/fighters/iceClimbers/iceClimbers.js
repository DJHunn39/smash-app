import IceClimbersSymbol from '../seriesIcons/IceClimbersSymbol.svg';
import IceClimbersHeadSSBU from './IceClimbersHeadSSBU.png';
import IceClimbersSSBU from './Ice_Climbers_SSBU.png';

const iceClimbers = {
  name: 'IceClimbers',
  series: {
    icon: IceClimbersSymbol,
    name: 'IceClimbers',
  },
  icon: IceClimbersHeadSSBU,
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
  picture: IceClimbersSSBU,
};

export default iceClimbers;
