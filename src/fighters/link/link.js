import zeldaSeries from '../../series/zeldaSeries/zeldaSeries';
import LinkHeadSSBU from './LinkHeadSSBU.png';
import LinkSSBU from './Link_SSBU.png';

const link = {
  name: 'Link',
  series: zeldaSeries,
  icon: LinkHeadSSBU,
  stats: {
    official: {
      weight: 77,
      airSpeed: 69,
      fallSpeed: 76,
      runSpeed: 40,
      dashSpeed: 82,
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
  picture: LinkSSBU,
};

export default link;
