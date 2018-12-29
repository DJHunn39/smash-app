import { unofficialStatNames } from '../constants/statNames';

const getStatType = stat => {
  if (stat.startsWith('danny') || stat.startsWith('jack')) {
    return stat.startsWith('danny') ? 'danny' : 'jack';
  }
  if (unofficialStatNames.includes(stat)) {
    return 'unofficial';
  }
  return 'official';
};

export default getStatType;
