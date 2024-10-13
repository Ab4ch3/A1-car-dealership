import { v4 as uuid } from 'uuid';
import { ICar } from './../../cars/interfaces/car.interface';

export const CARS_SEED: ICar[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civid',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Tesla V1',
  },
];
