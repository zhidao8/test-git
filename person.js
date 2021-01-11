class Person {
  name
  age

  constructor(name, age) {
    if (!name) {
      throw '[name] should not be empty';
    }
    this.name = name;
    this.age = age ? age : 0;
  }

  toString() {
    return `{ name: '${this.name}', age: ${this.age} }`;
  }
}

export { Person as default, Person };
