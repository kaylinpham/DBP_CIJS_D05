//BAI 1
const vowel = ["u", "e", "o", "a", "i"];
function distanceToNearestVowel(str) {
  let vowelIndex = [];
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowel.indexOf(arr[i]) !== -1) {
      vowelIndex.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (vowelIndex.indexOf(i) === -1) {
      let min = Math.abs(i - vowelIndex[0]);
      for (let j = 1; j < vowelIndex.length; j++) {
        let distance = Math.abs(i - vowelIndex[j]);
        min = distance < min ? distance : min;
      }
      arr[i] = min;
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}

//BAI 2
function checkSquare(arr, a, b, size) {
  for (let i = a; i < a + size; i++) {
    for (let j = b; j < b + size; j++) {
      if (arr[i][j] % 2 === 0) {
        return false;
      }
    }
  }
  return true;
}
function oddSquarePatch(arr) {
  let a = arr.length;
  let b = arr[0].length;
  let limit = a > b ? b : a;
  for (let n = limit; n > 0; n--) {
    for (let i = 0; i <= a - n; i++) {
      for (let j = 0; j <= b - n; j++) {
        if (checkSquare(arr, i, j, n)) {
          return n;
        }
      }
    }
  }
  return 0;
}

//BAI 3
function sum(n) {
  let number = n;
  if (n >= 10) {
    n = Math.floor(n / 10);
    return sum(n) + (number % 10);
  }
  return n;
}
function junctionOrSelf(n) {
  let limit =
    (Number(String(n)[0]) + 1) * Math.pow(10, String(n).length - 1) - 1;
  let arr = [];
  for (let i = n; i > n - sum(limit); i--) {
    if (n === i + sum(i)) {
      arr.push(i);
    }
  }
  return arr.length === 0 ? "Self" : arr;
}

//BAI 4
const morseToDots = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-.-.--": "!",
  "   ": " ",
  "..--..": "?",
  ".-.-.-": ".",
  ".----.": '"',
  "---...": ":",
  "--..--": ", ",
  " ": "",
};
function decodeMorse(str) {
  let arr = str.split(" ");
  let s = "";
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      s += morseToDots[arr[i]];
    } else {
      count += 1;
      if (count === 2) {
        s += " ";
        count = 0;
      }
    }
  }
  return s;
}

//BAI 5
function getFrame(a, b, symbol) {
  let arr = [];
  for (let i = 0; i < b; i++) {
    let element = [];
    let str = "";
    for (let j = 0; j < a; j++) {
      if (i === 0 || j === 0 || i === b - 1 || j === a - 1) {
        str += symbol;
      } else {
        str += " ";
      }
    }
    element.push(str);
    arr.push(element);
  }
  return arr;
}
