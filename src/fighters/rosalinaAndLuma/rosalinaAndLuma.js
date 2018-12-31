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
  picture: RosalinaLumaSSBU,
};

export default rosalinaAndLuma;
