import wiiFitSeries from '../../series/wiiFitSeries/wiiFitSeries';
import WiiFitTrainerHeadSSBU from './WiiFitTrainerHeadSSBU.png';
import WiiFitTrainerSSBU from './Wii_Fit_Trainer_SSBU.png';

const wiiFitTrainer = {
  name: 'Wii Fit Trainer',
  series: wiiFitSeries,
  icon: WiiFitTrainerHeadSSBU,
  stats: {
    official: {
      weight: 71,
      airSpeed: 76,
      fallSpeed: 62,
      runSpeed: 48,
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
  picture: WiiFitTrainerSSBU,
};

export default wiiFitTrainer;
