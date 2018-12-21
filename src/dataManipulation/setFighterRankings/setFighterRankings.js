import statNames from '../../constants/statNames';

const setFighterRankings = fighterData => {
  return statNames.reduce((acc, cur) => {
    acc[cur] = setStatRankings(cur, fighterData)
    return acc;
  }, {});
};

const setStatRankings = (stat, fighterData) => {
  const statType = getStatType(stat);
  const statRanking = fighterData.sort((a, b) => {
    let aStat, bStat, statName;
    if (statType === 'official') {
      aStat = a.stats.official[stat];
      bStat = b.stats.official[stat];
    } else {
      statName = stat.substr(statType.length).toLowerCase();
      aStat = a.stats.unofficial[statType][statName];
      bStat = b.stats.unofficial[statType][statName];
    }
    const comparison = bStat - aStat;
    return comparison !== 0 ? comparison : a.name.localeCompare(b.name);
  }).map((fighter, i) => {
    return fighter.name;
  });
  return statRanking;
};

const getStatType = stat => {
  if (stat.startsWith('danny') || stat.startsWith('jack')) {
    return stat.startsWith('danny') ? 'danny' : 'jack';
  }
  return 'official';
};

export default setFighterRankings;
