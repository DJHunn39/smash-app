import getUnofficialStat from '../../helpers/getUnofficialStat';
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
  picture: WiiFitTrainerSSBU,
};

export default wiiFitTrainer;
