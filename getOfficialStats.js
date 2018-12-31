const axios = require("axios");

const char = process.argv[2];

const url = `https://rankedboost.com/super-smash-bros/${char}/`

async function getPageContent(url) {
  const stats = [1, 2, 3, 4, 5];
  const statFinder = 'width:calc(';
  const statFinderLength = statFinder.length;
  const { data } = await axios.get(url);
  const statArray = stats.map((stat, index) => {
    const statIndex = nthIndex(data,statFinder,stat) + statFinderLength;
    const statString = data.slice(statIndex, statIndex + 4);
    const statStringValid = statString.replace(' ','').replace('%','');
    const statInt = Math.round(Number(statStringValid));
    return statInt;
  });

  console.log(`weight: ${statArray[0]},`)
  console.log(`airSpeed: ${statArray[1]},`)
  console.log(`fallSpeed: ${statArray[2]},`)
  console.log(`runSpeed: ${statArray[3]},`)
  console.log(`dashSpeed: ${statArray[4]},`)

  return;
}

function nthIndex(str, pat, n){
    var L= str.length, i= -1;
    while(n-- && i++<L){
        i= str.indexOf(pat, i);
        if (i < 0) break;
    }
    return i;
}

return getPageContent(url);
