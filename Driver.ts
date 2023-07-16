// import {Customer} from './class';
// let myCustomer = new Customer("Martin", "Dixon");
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';
import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';
import { Coach } from './Coach';

// let myShape = new Shape(10, 15);
// console.log(myShape.getInfo());
let myCircle = new Circle(5, 10, 20);
// console.log(myCircle.getInfo());
let myRectangle = new Rectangle(0, 0, 3, 7);
// console.log(myRectangle.getInfo());

let theShapes: Shape[] = [];
// theShapes.push(myShape);
// theShapes.push(myCircle);
// theShapes.push(myRectangle);
// for (let tempShape of theShapes) {
//     console.log(tempShape.getInfo());
//     console.log(tempShape.calculateArea());
//     console.log();
// }
let myCricketCoach = new CricketCoach();
console.log(myCricketCoach.getDailyWorkout());
let myGolfCoach = new GolfCoach();
console.log(myGolfCoach.getDailyWorkout());

let CoachArray: Coach[] = [];
CoachArray.push(myCricketCoach);
CoachArray.push(myGolfCoach);
for (let tempCoach of CoachArray) {
    console.log(tempCoach.getDailyWorkout());
}