//BAI 6
const vowel = ["U", "E", "O", "A", "I"];
function sigilize(str) {
  let s = "";
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (
      vowel.indexOf(str[i]) === -1 &&
      str.charCodeAt(i) >= 65 &&
      str.charCodeAt(i) <= 90
    ) {
      if (s.indexOf(str[i]) === -1) {
        s += str[i];
      } else {
        let j = s.indexOf(str[i]);
        s = s.slice(0, j) + s.slice(j + 1) + str[i];
      }
    }
  }
  return s;
}

//BAI 7
function count(str, n) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (n === Number(str[i])) {
      count++;
    }
  }
  return count;
}
function isSelfDescribing(number) {
  let str = String(number);
  if (str.length % 2 !== 0) {
    return false;
  } else {
    let arr1 = str.split("").filter((value, key) => key % 2 === 0);
    let arr2 = str.split("").filter((value, key) => key % 2 !== 0);
    let arr3 = [];
    arr2.map((value) => {
      arr3.push(count(str, Number(value)));
    });
    for (let i = 0; i < arr1.length; i++) {
      if (Number(arr1[i]) !== arr3[i]) {
        return false;
      }
    }
  }
  return true;
}

//BAI 8
function col(arr, x) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i][x];
  }
  return s;
}
function row(arr, x) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[x][i];
  }
  return s;
}
function isMagicSquare(arr) {
  let n = arr.length;
  let sum1 = 0,
    sum2 = 0;
  const total = (n * (n * n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (col(arr, j) !== total) {
          return false;
        }
      } else if (j === 0) {
        if (row(arr, i) !== total) {
          return false;
        }
      }
      if (i === j) {
        sum1 += arr[i][j];
      }
      if (j === n - 1 - i) {
        sum2 += arr[i][j];
      }
    }
  }
  return sum1 === total && sum2 === total;
}

//BAI 9
const month = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};
function surname(str) {
  str = str.toUpperCase().split("");
  let x = "XXX";
  let vowels = str.filter((value) => vowel.indexOf(value) !== -1);
  let consonants = str.filter((value) => vowel.indexOf(value) === -1);
  if (str.length < 3) {
    return str.join("") + x.slice(0, 3 - str.length);
  }
  return consonants.length >= 3
    ? consonants.join("").slice(0, 3)
    : consonants.join("") + vowels.join("").slice(0, 3 - consonants.length);
}
function nameTrans(str) {
  str = str.toUpperCase().split("");
  let x = "XXX";
  let vowels = str.filter((value) => vowel.indexOf(value) !== -1);
  let consonants = str.filter((value) => vowel.indexOf(value) === -1);
  if (str.length < 3) {
    return str.join("") + x.slice(0, 3 - str.length);
  } else if (consonants.length > 3) {
    return consonants[0] + consonants[2] + consonants[3];
  }
  return consonants.length === 3
    ? consonants.join("")
    : consonants.join("") + vowels.join("").slice(0, 3 - consonants.length);
}
function birth(gender, dob) {
  let dobArr = dob.split("/");
  if (dobArr[0].length === 1) {
    dobArr[0] = "0" + dobArr[0];
  }
  let date =
    dobArr[2].slice(dobArr[2].length - 2, dobArr[2].length) +
    month[Number(dobArr[1])];
  date +=
    gender.toUpperCase() === "M" ? dobArr[0] : String(Number(dobArr[0]) + 40);
  return date;
}
function fiscalCode(obj) {
  return (
    surname(obj.surname) + nameTrans(obj.name) + birth(obj.gender, obj.dob)
  );
}

//BAI 10
function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}
