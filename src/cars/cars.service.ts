import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public async create(dataCar: CreateCarDto) {
    console.log(dataCar);
    return await `This action adds a new car ${dataCar}`;
  }

  public async findAllCars() {
    return await this.cars;
  }

  public async findOneById(id: number) {
    const car = await this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car With id ${id} not found`);

    return car;
  }

  public async updateCar(id: number, updateDataCar: UpdateCarDto) {
    return await `This action updates a #${id} ${updateDataCar} car`;
  }

  public async deleteCar(id: number) {
    return await `This action removes a #${id} car`;
  }
}
