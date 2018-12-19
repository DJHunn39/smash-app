import MarioSymbol from '../../seriesIcons/MarioSymbol.svg';
import RosalinaLumaHeadSSBU from './RosalinaLumaHeadSSBU.png';
import RosalinaLumaSSBU from './RosalinaLuma_SSBU.png';

const rosalinaAndLuma = {
  name: 'Rosalina&Luma',
  series: {
    icon: MarioSymbol,
    name: 'Rosalina&Luma',
  },
  icon: RosalinaLumaHeadSSBU,
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
  picture: RosalinaLumaSSBU,
};

export default rosalinaAndLuma;
