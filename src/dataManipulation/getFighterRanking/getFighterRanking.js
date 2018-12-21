import getStatRank from './getStatRank';
import statNames from '../../constants/statNames';

const getFighterRanking = (fighter, rankings) => {
  return statNames.reduce((acc, cur) => {
    const statRankings = rankings[cur];
    acc[cur] = getStatRank(fighter.name, statRankings)
    return acc;
  }, {})
}

export default getFighterRanking;
