/**
 * Class to create a person object
 */
exports.Person = class {
  /**
   * @param {Object} personInfo Information about the Person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet - A greeting with the name and age
   * @return {void}
   */
  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
};
