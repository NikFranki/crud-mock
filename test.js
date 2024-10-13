// cal 30000 numbers, find sub set and diff set
// mock
const mockData1 = new Array(3000).fill().map(((_, index) => index));
const mockData2 = new Array(3001).fill().map(((_, index) => index + 1));

// first way: use array.includes, cal time complex
console.time('first way');
const maxData = mockData1.length > mockData2.length ? mockData1 : mockData2;
const diff1 = mockData1.filter(item => !mockData2.includes(item));
const diff2 = mockData2.filter(item => !mockData1.includes(item));
const sames = maxData.filter(item => ![diff1, diff2].includes(item));
console.log('diff1: ', diff1);
console.log('diff2: ', diff2);
console.timeEnd('first way');

console.time('second way');
const set1 = new Set();
for (const item of mockData1) {
  set1.add(item);
}
const set2 = new Set();
for (const item of mockData2) {
  set2.add(item);
}

const newDiff1 = [];
const newDiff2 = [];
const newSames = [];
const alreadyExistSet = new Set();
for (const item of set1) {
  if (set2.has(item)) {
    alreadyExistSet.add(item);
    newSames.push(item);
  } else {
    newDiff1.push(item);
  }
}

for (const item of set2) {
  if (set1.has(item)) {
    if (!alreadyExistSet.has(item)) {
      alreadyExistSet.add(item);
      newSames.push(item);
    }
  } else {
    newDiff2.push(item);
  }
}
console.log('newDiff1: ', newDiff1);
console.log('newDiff2: ', newDiff2);
console.timeEnd('second way');
