import getUnofficialStat from '../../helpers/getUnofficialStat';
import marioSeries from '../../series/marioSeries/marioSeries';
import RosalinaLumaHeadSSBU from './RosalinaLumaHeadSSBU.png';
import RosalinaLumaSSBU from './RosalinaLuma_SSBU.png';

const rosalinaAndLuma = {
  name: 'Rosalina & Luma',
  series: marioSeries,
  icon: RosalinaLumaHeadSSBU,
  stats: {
    official: {
      weight: 61,
      airSpeed: 78,
      fallSpeed: 57,
      runSpeed: 47,
      dashSpeed: 84,
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
  picture: RosalinaLumaSSBU,
};

export default rosalinaAndLuma;
