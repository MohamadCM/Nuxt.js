var jalaali = require('jalaali-js');

function convertToJalaali (date) {
  return (jalaali.toJalaali(new Date(date))).jy + '/' +
    (jalaali.toJalaali(new Date(date))).jm + '/' +
    (jalaali.toJalaali(new Date(date))).jd;
}

export { convertToJalaali };
