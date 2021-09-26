const responseStandard = require('../helpers/response');

module.exports = {
  catch: (req, res) => {
    const success = Math.random() < 0.5;
    return responseStandard(res, null, {success});
  },
  relase: (req, res) => {
    const number = Math.floor(Math.random() * 10001);
    let isPrime = true;
    for (let i = 1; i < number; i++) {
      isPrime = number / i !== 0;
      if (!isPrime) {
        break;
      }
    }
    return responseStandard(res, null, {number, isPrime});
  },
  changeName: (req, res) => {
    let {name, timeChange: nextChange} = req.body;
    nextChange = nextChange ? nextChange * 1 : 0;
    console.log(nextChange);
    const nameArr = name.split('-');
    const lastNum = nameArr[nameArr.length - 1];
    const fiboSeries = [0, 1, 1];
    if (Number(lastNum) === 0 || Number(lastNum)) {
      name = nameArr.slice(0, nameArr.length - 1).join('-');
    } else {
      name = nameArr.join('-');
    }
    if (nextChange < 0) {
      return responseStandard(res, null, {
        name: `${name}-${0}`,
        timeChange: 1,
      });
    }
    if (nextChange > 2) {
      for (let i = 3; i <= nextChange; i++) {
        const nextSeries =
          fiboSeries[fiboSeries.length - 2] + fiboSeries[fiboSeries.length - 1];
        fiboSeries.push(nextSeries);
      }
    }
    return responseStandard(res, null, {
      name: `${name}-${fiboSeries[nextChange]}`,
      timeChange: nextChange + 1,
    });
  },
};
