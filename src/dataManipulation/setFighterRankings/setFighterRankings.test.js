import setFighterRankings from './setFighterRankings';

import mockFighterData from './fixtures/mockFighterData';
import mockRankings from './fixtures/mockRankings';

it('sets fighter rankings', () => {
  const actual = setFighterRankings(mockFighterData);
  const expected = mockRankings;
  expect(actual).toMatchObject(expected);
});
