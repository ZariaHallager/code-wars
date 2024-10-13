// Pseudo-code:
// 1. Create a base class 'Human'.
// 2. Create two subclasses 'Man' and 'Woman' that extend 'Human'.
// 3. Write a 'God.create()' method that returns an array of two instances:
//    - First element: instance of 'Man'
//    - Second element: instance of 'Woman'

class Human {
    constructor(name) {
        this.name = name;
    }
}

// Subclass representing a man, extending the Human class.
class Man extends Human {
    constructor(name) {
        super(name); // Call the parent class constructor
    }
}

// Subclass representing a woman, extending the Human class.
class Woman extends Human {
    constructor(name) {
        super(name); // Call the parent class constructor
    }
}

// God's creation function, returning an array with a Man and a Woman.
const God = {
    create() {
        return [new Man("Adam"), new Woman("Eve")]; // Array with instances of Man and Woman
    }
};

// Example usage:
const [adam, eve] = God.create();
console.log(adam); // Man { name: 'Adam' }
console.log(eve);  // Woman { name: 'Eve' }
