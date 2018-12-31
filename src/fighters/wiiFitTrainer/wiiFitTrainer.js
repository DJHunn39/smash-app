import getUnofficialStats from '../../helpers/getUnofficialStats';
import wiiFitSeries from '../../series/wiiFitSeries/wiiFitSeries';
import WiiFitTrainerHeadSSBU from './WiiFitTrainerHeadSSBU.png';
import WiiFitTrainerSSBU from './Wii_Fit_Trainer_SSBU.png';

const filename = 'wiiFitTrainer';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: WiiFitTrainerSSBU,
};

export default wiiFitTrainer;
