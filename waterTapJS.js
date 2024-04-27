// Define a function that we'll need to use later
// This Function is for calculate Time for without walking time of initial people
function calculateTimeForFillUpBottleWithOutWalkingTime(bottleQueue, tapFlows, walkingTime) {
  // Defaulting the values in case omitted
  if (bottleQueue === null) {
    bottleQueue = [400, 750, 1000];
  }

  if (tapFlows === null) {
    tapFlows = [50, 200];
  }

  if (walkingTime === null) {
    walkingTime = 0;
  }
const tapFlowsLength = tapFlows.length
  // tapTimes is the total time people have spent at each tap as we move down the queue.
  // Before the loop, this is initialized as [0, 0, 0, ....., 0] with one zero for each tap
  let tapTimes = Array(tapFlowsLength).fill(0)
  //This for number of booked bottle initially for zero
  let bottleBookCount = 0
  /// This For Calculate total time needed for Booked all bottle initially will be zero
  let totalNeedTime = 0;
  // Loop through each bottle in the queue
  bottleQueue.forEach((bottleSize) => {
    // We then find which queue is the "emptiest", ie what is the minimum item in the array
    // We use this function instead of Math.min(...tapTimes) because we want to find the INDEX of the minimum
    let minIndex = findMinIndex(tapTimes);
   
    // By the time we get to this point we have found minIndex which is the index of the lowest value in tapTimes
    // This tells us that this person walks up to tap number minIndex (assuming the first tap is tap number 0)

    // Set flow to tapFlows[minIndex]
    let flow = tapFlows[minIndex];

    // bottle size divided by flow
    let timeSpentFillingBottle = bottleSize / flow;
  ///The Number Of Bottle Booked
   bottleBookCount++

     // We add the amount of time to tapTimes that the person is "using" the tap, to signify that this tap is busy until that point in time.
    // There are two parts to this:

    // PART 1: Adding on the time to walk to the tap For Initial People Only
    if(tapFlowsLength < bottleBookCount)
    tapTimes[minIndex] += walkingTime;
   
    // PART 2: Adding on the actual time the tap is being used to fill up the bottle
    tapTimes[minIndex] += timeSpentFillingBottle;
    if(tapTimes[minIndex] > totalNeedTime)
    totalNeedTime = tapTimes[minIndex]
  });
 
  return totalNeedTime
}
// This function works exactly the same way as the "min" function, except it returns the INDEX of the value which is minimum
function findMinIndex(array) {
  let minIndex = null;
  let minValue = null;
  array.forEach((value, i) => {
    if (minValue === null || value < minValue) {
      minIndex = i;
      minValue = value;
    }
  });
  return minIndex;
}

// Define our actual important function
function calculateTimeForFillUpBottle(bottleQueue, tapFlows, walkingTime) {
  // Defaulting the values in case omitted
  if (bottleQueue === null) {
    bottleQueue = [400, 750, 1000];
  }

  if (tapFlows === null) {
    tapFlows = [50, 200];
  }

  if (walkingTime === null) {
    walkingTime = 0;
  }
const tapFlowsLength = tapFlows.length
  // tapTimes is the total time people have spent at each tap as we move down the queue.
  // Before the loop, this is initialized as [0, 0, 0, ....., 0] with one zero for each tap
  let tapTimes = Array(tapFlowsLength).fill(0)
  /// This For Calculate total time needed for Booked all bottle initially will be zero
  let totalNeedTime = 0;
  // Loop through each bottle in the queue
  bottleQueue.forEach((bottleSize) => {
    // We then find which queue is the "emptiest", ie what is the minimum item in the array
    // We use this function instead of Math.min(...tapTimes) because we want to find the INDEX of the minimum
    let minIndex = findMinIndex(tapTimes);
   
    // By the time we get to this point we have found minIndex which is the index of the lowest value in tapTimes
    // This tells us that this person walks up to tap number minIndex (assuming the first tap is tap number 0)

    // Set flow to tapFlows[minIndex]
    let flow = tapFlows[minIndex];

    // bottle size divided by flow
    let timeSpentFillingBottle = bottleSize / flow;

     // We add the amount of time to tapTimes that the person is "using" the tap, to signify that this tap is busy until that point in time.
    // There are two parts to this:

    // PART 1: Adding on the time to walk to the tap For Initial People Only
    tapTimes[minIndex] += walkingTime;
   
    // PART 2: Adding on the actual time the tap is being used to fill up the bottle
    tapTimes[minIndex] += timeSpentFillingBottle;
    if(tapTimes[minIndex] > totalNeedTime)
    totalNeedTime = tapTimes[minIndex]
  });
 
  return totalNeedTime
}



let queueExample = [400, 750, 1000];
let walkTimeExample = 5;
let flowRatesExample = [50, 200];

console.log("With Walking Time");
console.log(calculateTimeForFillUpBottle(queueExample, flowRatesExample, walkTimeExample));
console.log("-----");
console.log("WithOut Walking Time For Initial People");
console.log(calculateTimeForFillUpBottleWithOutWalkingTime(queueExample, flowRatesExample, walkTimeExample));
console.log("-----");


////Yes, if increase the flow rate of at least one of the taps , it takes less time to fill a bottle
// here is the example

// let queueExample = [400, 750, 1000];
// let walkTimeExample = 5;
// let flowRatesExample = [51, 201];

// console.log("With Walking Time");
// console.log(calculateTime(queueExample, flowRatesExample, walkTimeExample));
// console.log("-----");
// console.log("WithOut Walking Time For Initial People");
// console.log(calculateTimeWithOutWalkingTime(queueExample, flowRatesExample, walkTimeExample));
// console.log("-----");