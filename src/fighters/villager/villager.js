import animalCrossingSeries from '../../series/animalCrossingSeries/animalCrossingSeries';
import VillagerHeadSSBU from './VillagerHeadSSBU.png';
import VillagerSSBU from './Villager_SSBU.png';

const villager = {
  name: 'Villager',
  series: animalCrossingSeries,
  icon: VillagerHeadSSBU,
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
  picture: VillagerSSBU,
};

export default villager;
