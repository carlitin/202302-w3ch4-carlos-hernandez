import { Circle } from './circle.js';
import { Figure } from './figure.js';
import { Square } from './square.js';

const figures: Figure[] = [
  new Circle(23),
  new Circle(54),
  new Circle(33),
  new Square(5),
];

figures[2].calculateArea(); // 3419,46
figures[3].calculateArea(); // 25

if (figures[3] instanceof Square) {
  figures[3].doSomethingOfSquare();
}

const mySquare = new Square(3);
mySquare.doSomethingOfSquare();
