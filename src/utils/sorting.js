// sort an array of objects by date - ascending
const sortAsc = (a, b) => {
  var key1 = new Date(a.date);
  var key2 = new Date(b.date);

  return key1 - key2;
};

// sort an array of objects by date - descending
const sortDesc = (a, b) => {
  var key1 = new Date(a.date);
  var key2 = new Date(b.date);

  return key2 - key1;
};

export { sortAsc, sortDesc };
