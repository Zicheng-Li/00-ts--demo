"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
// let myShape = new Shape(10, 15);
// console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
// console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// console.log(myRectangle.getInfo());
let theShapes = [];
// theShapes.push(myShape);
// theShapes.push(myCircle);
// theShapes.push(myRectangle);
// for (let tempShape of theShapes) {
//     console.log(tempShape.getInfo());
//     console.log(tempShape.calculateArea());
//     console.log();
// }
let myCricketCoach = new CricketCoach_1.CricketCoach();
console.log(myCricketCoach.getDailyWorkout());
let myGolfCoach = new GolfCoach_1.GolfCoach();
console.log(myGolfCoach.getDailyWorkout());
let CoachArray = [];
CoachArray.push(myCricketCoach);
CoachArray.push(myGolfCoach);
for (let tempCoach of CoachArray) {
    console.log(tempCoach.getDailyWorkout());
}
