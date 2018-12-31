import dannyStats from '../constants/unofficialStats/danny/index';
import jackStats from '../constants/unofficialStats/jack/index';
import { unofficialStatNames } from '../constants/statNames';

const people = ['danny', 'jack'];

const getUnofficialStat = (person, stat, fighter) => {
  return person === 'danny' ? dannyStats[stat][fighter]:
  jackStats[stat][fighter];
}

const getUnofficialStats = (fighter) => {
  let unofficialStats = {};
  people.forEach(person => {
    unofficialStats[person] = {};
    unofficialStatNames.forEach(stat => {
      unofficialStats[person][stat] = getUnofficialStat(person, stat, fighter);
    })
  })
  return unofficialStats;
}

export default getUnofficialStats;
