import getUnofficialStat from '../../helpers/getUnofficialStat';
import starFoxSeries from '../../series/starFoxSeries/starFoxSeries';
import FalcoHeadSSBU from './FalcoHeadSSBU.png';
import FalcoSSBU from './Falco_SSBU.png';

const falco = {
  name: 'Falco',
  series: starFoxSeries,
  icon: FalcoHeadSSBU,
  stats: {
    official: {
      weight: 61,
      airSpeed: 73,
      fallSpeed: 86,
      runSpeed: 42,
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
  picture: FalcoSSBU,
};

export default falco;
