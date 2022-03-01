// @ts-check
const { add } = require("./calculator.js");
const { Person } = require("./person.js");

/**
 * @file index.js is root file for this example app
 * @author Dahye Shin
 * @see {@link https://github.com/dahye1013}
 */

/**
 * My Name
 * @type {string}
 */
const myName = "dahye";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97, 76, 89];

/**
 * Todo object
 * @type {{id:string|number, text:string}}
 */
const todo = {
  id: "1",
  text: "Having a good day!!😆",
};

/**
 * A student
 * @typedef {object} Student
 * @property {number} id - Student Id
 * @property {string} name - Student name
 * @property {string|number} [age] - Studnet age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const Student = {
  id: 1,
  name: "dahye",
  age: "secret",
  isActive: true,
};

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: "Dahye Shin",
  age: 0,
});
