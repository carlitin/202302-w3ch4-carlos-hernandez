import { Figure } from './figure.js';

export class Circle implements Figure {
  #radius: number;

  constructor(radius: number) {
    this.#radius = radius;
  }

  calculateArea(): number {
    const squareRadius = this.#radius ** 2;
    return Math.PI * squareRadius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.#radius;
  }
}
