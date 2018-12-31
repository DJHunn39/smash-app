import getUnofficialStat from '../../helpers/getUnofficialStat';
import warioSeries from '../../series/warioSeries/warioSeries';
import WarioHeadSSBU from './WarioHeadSSBU.png';
import WarioSSBU from './Wario_SSBU.png';

const wario = {
  name: 'Wario',
  series: warioSeries,
  icon: WarioHeadSSBU,
  stats: {
    official: {
      weight: 79,
      airSpeed: 95,
      fallSpeed: 77,
      runSpeed: 43,
      dashSpeed: 76,
    },
    unofficial: {
      danny: {
        fun: getUnofficialStat('danny', 'fun', 'wario'),
        power: getUnofficialStat('danny', 'power', 'wario'),
        nostalgia: getUnofficialStat('danny', 'nostalgia', 'wario'),
        racovery: getUnofficialStat('danny', 'recovery', 'wario'),
        final: getUnofficialStat('danny', 'final', 'wario'),
      },
      jack: {
        fun: getUnofficialStat('jack', 'fun', 'wario'),
        power: getUnofficialStat('jack', 'power', 'wario'),
        nostalgia: getUnofficialStat('jack', 'nostalgia', 'wario'),
        racovery: getUnofficialStat('jack', 'recovery', 'wario'),
        final: getUnofficialStat('jack', 'final', 'wario'),
      }
    },
  },
  picture: WarioSSBU,
};

export default wario;
