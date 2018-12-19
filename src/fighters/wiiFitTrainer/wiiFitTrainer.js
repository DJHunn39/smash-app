import WiiFitSymbol from '../../seriesIcons/WiiFitSymbol.svg';
import WiiFitTrainerHeadSSBU from './WiiFitTrainerHeadSSBU.png';
import WiiFitTrainerSSBU from './Wii_Fit_Trainer_SSBU.png';

const wiiFitTrainer = {
  name: 'Wii Fit Trainer',
  series: {
    icon: WiiFitSymbol,
    name: 'Wii Fit',
  },
  icon: WiiFitTrainerHeadSSBU,
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
  picture: WiiFitTrainerSSBU,
};

export default wiiFitTrainer;
