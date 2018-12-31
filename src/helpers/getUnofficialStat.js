import dannyStats from '../constants/unofficialStats/danny/index';
import jackStats from '../constants/unofficialStats/jack/index';

const getUnofficialStat = (person, stat, fighter) => {
  return person === 'danny' ? dannyStats[stat][fighter]:
  jackStats[stat][fighter];
}

export default getUnofficialStat;
