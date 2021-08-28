function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

const myRangeIterator = makeRangeIterator(0,10);//it is returning rangeIterator
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());