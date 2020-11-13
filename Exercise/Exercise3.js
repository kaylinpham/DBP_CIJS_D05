//BAI 6
function distance(arr) {
  let a = [];
  for (let i = 0; i < arr.length - 1; i++) {
    a.push(Number(arr[i]) - Number(arr[i + 1]));
  }
  return a;
}
function digitaldrome(n) {
  let arr = distance(String(n).split(""));
  if (arr.every((c) => c === 0)) {
    return "Repdrome";
  } else if (arr.every((c) => c <= 0)) {
    if (arr.indexOf(0) === -1) {
      return "Metadrome";
    } else {
      return "Plaindrome";
    }
  } else if (arr.every((c) => c >= 0)) {
    if (arr.indexOf(0) === -1) {
      return "Katadrome";
    } else {
      return "Nialpdrome";
    }
  }
  return "Nondrome";
}

//BAI 7
function checkFlush(arr1, arr2) {
  let a = [],
    b = [];
  arr1.map((value) => {
    let length = value.length - 1;
    a.push(value.slice(length));
  });
  arr2.map((value) => {
    let length = value.length - 1;
    b.push(value.slice(length));
  });
  if (b[0] !== b[1]) {
    for (let i = 0; i < b.length; i++) {
      let count = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[j] === b[i]) {
          count++;
        }
      }
      if (count >= 4) {
        return true;
      }
    }
  } else {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[0]) {
        count++;
      }
    }
    if (count >= 3) {
      return true;
    }
  }
  return false;
}
console.log(
  checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"])
);

//BAI 8
function rolls(arr) {
  let sum = 0;
  let a = [...arr];
  for (let i = 0; i < arr.length; i++) {
    sum += a[i];
    if (i !== arr.length - 1) {
      if (arr[i] === 1) {
        a[i + 1] = 0;
      } else if (arr[i] === 6) {
        a[i + 1] = arr[i + 1] * 2;
      }
    }
  }
  return sum;
}

//BAI 10
const firt12years = [
  {
    gregorianYear: 1984,
    Stem: "Wood",
    Branch: "Rat",
  },
  {
    gregorianYear: 1985,
    Stem: "Wood",
    Branch: "Ox",
  },
  {
    gregorianYear: 1986,
    Stem: "Fire",
    Branch: "Tiger",
  },
  {
    gregorianYear: 1987,
    Stem: "Fire",
    Branch: "Rabbit",
  },
  {
    gregorianYear: 1988,
    Stem: "Earth",
    Branch: "Dragon",
  },
  {
    gregorianYear: 1989,
    Stem: "Earth",
    Branch: "Snake",
  },
  {
    gregorianYear: 1990,
    Stem: "Metal",
    Branch: "Horse",
  },
  {
    gregorianYear: 1991,
    Stem: "Metal",
    Branch: "Sheep",
  },
  {
    gregorianYear: 1992,
    Stem: "Water",
    Branch: "Monkey",
  },
  {
    gregorianYear: 1993,
    Stem: "Water",
    Branch: "Rooster",
  },
  {
    gregorianYear: 1994,
    Stem: "Wood",
    Branch: "Dog",
  },
  {
    gregorianYear: 1995,
    Stem: "Wood",
    Branch: "Pig",
  },
];
function sexagenary(n) {
  let s = "";
  firt12years.map((value) => {
    if (value.gregorianYear % 10 === n % 10) {
      s += value.Stem + " ";
    }
  });
  firt12years.map((value) => {
    if (value.gregorianYear % 12 === n % 12) {
      s += value.Branch;
    }
  });
  return s;
}
