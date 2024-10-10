import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
    //quiere decir que esto es un arrays de Interface Car
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public async create(createCarDto: CreateCarDto) {
    const newCar: ICar = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return await newCar;
  }

  public async findAllCars() {
    return await this.cars;
  }

  public async findOneById(id: string) {
    const car = await this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car With id ${id} not found`);

    return car;
  }

  public async updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    this.cars = this.cars.map((car): any => {
      if (car.id === id) {
        carDB = {
          id,
          ...carDB,
          ...updateCarDto,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  public async deleteCar(id: string) {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);
    return `Success`;
  }
}
