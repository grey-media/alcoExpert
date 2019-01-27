export const dateToString = (date) => {
  // make day and month string whis 0
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const result = `${year}/ ${month} / ${day}`;
  return result;
};

export const calculateDate = (difference) => {
  // take today date
  const date = new Date();
  // calculate new date
  date.setDate(date.getDate() + difference);
  return date;
};

// create date from timestamp
// * 1000 to convert unix timestamp to date format
export const secondToDate = sec => new Date(sec * 1000);


// calculate promile in the blood
// A - etanol (mg), m - weight, r - (male/female coefficient)
// adj - coefficient не усвоенного алкоголя (10-30%)
export const calculatePromile = (A, m, r, adj) => {
  const result = (A - (A * adj / 100)) / (m * r);
  return result;
};

// calculate alcohol substance in drink (ml)
// V - объем
export const calculateVol = (V, percent) => (V / 100 * percent);

// calculate alcohol substance in drink (mg)
// V - объем
export const calculateVolMg = (V, percent) => (V / 100 * percent * 0.79);

// the time of removal of alcohol from the body
// ppm - promille, adj - coefficient removal of alcohol (0.14 - 0.086)
export const removalTime = (ppm, adj) => (ppm / adj);

// считаем корректирующий коэффициент (10-30%) на основе кол-ва еды
// 0 не ел 2 - много ел
export const ppmAdj = (eat) => {
  let adj;
  switch (eat) {
    case 0:
      adj = 12;
      break;
    case 1:
      adj = 20;
      break;
    default:
      adj = 28;
  }
  return adj;
};

export const removalAdj = (gender, activity) => {
  let adj;
  if (gender === 'male') {
    switch (activity) {
      case 0:
        adj = 0.1;
        break;
      case 1:
        adj = 0.12;
        break;
      default:
        adj = 0.14;
    }
  } else {
    switch (activity) {
      case 0:
        adj = 0.86;
        break;
      case 1:
        adj = 0.93;
        break;
      default:
        adj = 0.1;
    }
  }
  return adj;
};

export const hoursToTime = (hour) => {
  const h = Math.floor(hour);
  const remainder = (hour % 1).toFixed(2);
  const m = Math.floor(60 * remainder);
  return [h, m];
};

export const alcoStady = (ppm, lang) => {
  let result;
  switch (true) {
    case ppm >= 5:
      result = lang.a;
      break;
    case ppm >= 4:
      result = lang.b;
      break;
    case ppm >= 3:
      result = lang.c;
      break;
    case ppm >= 1.5:
      result = lang.d;
      break;
    case ppm >= 0.59:
      result = lang.e;
      break;
    case ppm >= 0.2:
      result = lang.f;
      break;
    default:
      result = lang.j;
  }
  return result;
};
