import { Figure } from './figure.js';

export class Square implements Figure {
  #size: number;

  constructor(size: number) {
    this.#size = size;
  }

  calculateArea(): number {
    return this.#size ** 2;
  }

  calculatePerimeter(): number {
    return this.#size * 4;
  }

  doSomethingOfSquare() {
    console.log('Soy un cuadrado feliz');
  }
}
