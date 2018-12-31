import getUnofficialStats from '../../helpers/getUnofficialStats';
import animalCrossingSeries from '../../series/animalCrossingSeries/animalCrossingSeries';
import VillagerHeadSSBU from './VillagerHeadSSBU.png';
import VillagerSSBU from './Villager_SSBU.png';

const filename = 'villager';

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
    unofficial: getUnofficialStats(filename),
  },
  picture: VillagerSSBU,
};

export default villager;
