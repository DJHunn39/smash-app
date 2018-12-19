import WiiFitTrainerSymbol from '../../seriesIcons/WiiFitTrainerSymbol.svg';
import WiiFitTrainerHeadSSBU from './WiiFitTrainerHeadSSBU.png';
import WiiFitTrainerSSBU from './Wii_Fit_Trainer_SSBU.png';

const wiiFitTrainer = {
  name: 'WiiFitTrainer',
  series: {
    icon: WiiFitSymbol,
    name: 'WiiFitTrainer',
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
