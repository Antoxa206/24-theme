//Завлання 1

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Привіт! Моє ім'я ${this.name}, і мені ${this.age} років.`);
  };
  
  const person1 = new Person('Олена', 25);
  person1.greet(); 
  

//Завдання 2

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log('Тварина видає звук');
  };
  
  function Dog(name) {
    Animal.call(this, name); 
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.speak = function() {
    console.log('Собака гавкає');
  };
  
  const dog = new Dog('Шарик');
  dog.speak(); 

//Завдання 3

function Car(brand) {
    this.brand = brand;
  }
  
  const car1 = new Car('Toyota');
  const car2 = new Car('BMW');
  
  
  Car.prototype.describe = function() {
    console.log(`Це автомобіль марки ${this.brand}.`);
  };
  
  car1.describe();
  car2.describe(); 

//Завдання 4

function Shape() {}

Shape.prototype.draw = function() {
  console.log('Малюємо фігуру');
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('Малюємо коло');
};

const shape = new Shape();
const circle = new Circle();

shape.draw(); 
circle.draw(); 

//Завдання 5

function Vehicle() {}

Vehicle.prototype.start = function() {
  console.log('Транспортний засіб запущено');
};

Vehicle.prototype.stop = function() {
  console.log('Транспортний засіб зупинено');
};

function Car() {
  Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function ElectricCar() {
  Car.call(this);
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function() {
  console.log('Електромобіль заряджається');
};

const myElectricCar = new ElectricCar();
myElectricCar.start();   
myElectricCar.charge();  
myElectricCar.stop();    