/* Big O notation

The official term is Big-O asymptomatic analysis, that is given enough time, any problem can be solved. What matters is, how well the problem is solved. And this is where Big-O can help us. It can tell us how well a problem is solved.

Readability, is your code clean, can others understand it.

Scalability, allows us to measure, how the code can scale.

Example, using the **Array()** constructor with the **fill()** method.
*/

const largeArray = new Array(1000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'nemo') {
      console.log('found him!!');
    }
  }
  let t1 = performance.now();
  console.log(`total time: ${t1 - t0} ms.`);
}

findNemo(largeArray);

// We going to make this same function more efficient.
