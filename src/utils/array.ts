import { randomInt } from './random';

export function randomArray(length: number, min: number, max: number) {
  return Array.from({ length }, () => randomInt(min, max));
}
