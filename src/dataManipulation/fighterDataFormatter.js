import getFighterRanking from './getFighterRanking/getFighterRanking';
import setFighterRankings from './setFighterRankings/setFighterRankings';

const formatData = fighterData => {
  const rankings = setFighterRankings(fighterData)
  const formattedData = fighterData.map(
    fighter => {
      fighter.ranking = getFighterRanking(fighter, rankings);
      return fighter;
    }
  );
  return formattedData;
}

export default formatData;
