import getUnofficialStat from '../../helpers/getUnofficialStat';
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
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      },
      jack: {
        fun: getUnofficialStat('danny', 'fun', 'bayonetta')
        power: getUnofficialStat('danny', 'power', 'bayonetta')
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'bayonetta'),
        racovery: getUnofficialStat('danny', 'recovery', 'bayonetta'),
        final: getUnofficialStat('danny', 'final', 'bayonetta'),
      }
    },
  },
  picture: IceClimbersSSBU,
};

export default iceClimbers;
