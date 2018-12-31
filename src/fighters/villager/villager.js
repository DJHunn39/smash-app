import getUnofficialStat from '../../helpers/getUnofficialStat';
import animalCrossingSeries from '../../series/animalCrossingSeries/animalCrossingSeries';
import VillagerHeadSSBU from './VillagerHeadSSBU.png';
import VillagerSSBU from './Villager_SSBU.png';

const villager = {
  name: 'Villager',
  series: animalCrossingSeries,
  icon: VillagerHeadSSBU,
  stats: {
    official: {
      weight: 68,
      airSpeed: 73,
      fallSpeed: 63,
      runSpeed: 36,
      dashSpeed: 75,
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
  picture: VillagerSSBU,
};

export default villager;
