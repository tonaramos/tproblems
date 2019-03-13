/*
Given an array of arrays containing classes start and ending times (times in minutes of the day only), place the classes in the least
amount of rooms possible with out overlapping classes.
class = [classStartTime, classEndTime];

given the list of classes =   [[0, 30], [60, 180], [45, 240]]

return =  [[[0, 30], [60, 180]], [[45, 240]]];  

That is two rooms, first with two classes, and second with one class. No classes overlapping. 

i: array of array
O: int with min number of room and second which room accomodates 
*/

const scheduleClasses = (listOfClasses) => {

  // Sort the list of Classes by starting time
  listOfClasses.sort((curr, after) => {
    if (curr[0] < after[0]) {
      return -1;
    } else if (curr[0] > after[0]) {
      return 1;
    } else {
      if (curr[1] < after[1]) {
        return -1;
      } else if (curr[1] > after[1]) {
        return 1;
      }
    }
  });
 
  let building = [[]];

  for (let i = 0; i< listOfClasses.length; i++) {
    let placed = false;
    let room = 0;
    let klassToPlace = listOfClasses[i];
    while (!placed) {
      // Add classroom if it doesn't exist
      if (!building[room]) {
        building.push([])
      }
      
      // If room is empty just add class
      if (building[room].length === 0) {
        building[room].push(klassToPlace);
        placed = true;
      }

      // check the last class added and if they dont overlap add it to that room 
      const lastKlass = building[room][building[room].length-1];
      if (lastKlass[1] < klassToPlace[0]) {
        building[room].push(klassToPlace);
        placed = true;
      }
      
      // Move to the next room
      room += 1;
    }
  }

  // for (room in building) {
  //   console.log('Classes in Room ', room, ' ', building[room]);
  // }

  return     building;   
};

let test0 = [[0, 30], [60, 180], [45, 240]];
let test1 = [[30,50]];
let test2 = [[20,35], [0,4], [5,25], [20,30], [30,35]];
let test3 = [[20,35], [0,4], [30,35], [5,25], [20,30]];
let test4 = [[0,12], [0,9], [0,5], [10,12], [10,11]];
let test5 = [[1,5], [5,10], [2,8], [8,10]];

console.log(scheduleClasses(test0));
console.log(scheduleClasses(test1));
console.log(scheduleClasses(test2));
console.log(scheduleClasses(test3));
console.log(scheduleClasses(test4));
console.log(scheduleClasses(test5));

