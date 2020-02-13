(() => {

  const days = ['s', 'm', 't', 'h', 'f', 's'];
  const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const startDate = {
    dow: 1,
    d: 1,
    m: 0,
    y: 1900
  };
  const endDate = {
    d: 31,
    m: 11,
    y: 2000
  };
  let currentDate = {
    dow: startDate.dow,
    d: startDate.d,
    m: startDate.m,
    y: startDate.y,
  }

  function atEndDate (currentDate, endDate) {
    return currentDate.d === endDate.d &&
           currentDate.m === endDate.m &&
           currentDate.y === endDate.y;
  }

  function isLeapYear (year) {
    return year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0);
  } 

  function getDaysInMonth (currentDate, daysPerMonth) {
    const daysInMonth = daysPerMonth[currentDate.m];
    if (currentDate.m === 1 && isLeapYear(currentDate.y)) {
      return daysInMonth + 1;
    }

    return daysInMonth;
  }

  function advanceDay (currentDate, days, daysPerMonth) {
    const newDate = {};
    const daysInMonth = getDaysInMonth(currentDate, daysPerMonth);

    newDate.dow = currentDate.dow + 1 > days.length ? 0 : currentDate.dow + 1
    if (currentDate.d + 1 > daysInMonth) {
      newDate.d = 1;
      if (currentDate.m + 1 > 11) {
        newDate.m = 0;
        newDate.y = currentDate.y + 1;
      } else {
        newDate.m = currentDate.m + 1;
        newDate.y = currentDate.y;
      }
    } else {
      newDate.d = currentDate.d + 1;
      newDate.m = currentDate.m;
      newDate.y = currentDate.y;
    }

    return newDate;
  }

  let numSundaysOnTheFirst = 0;

  while (!atEndDate(currentDate, endDate)) {
    currentDate = advanceDay(currentDate, days, daysPerMonth);
    if (currentDate.y >= 1901 && currentDate.dow === 0 && currentDate.d === 1) {
      console.log(currentDate);
      numSundaysOnTheFirst++;
    }
  }

  console.log(numSundaysOnTheFirst);
})();