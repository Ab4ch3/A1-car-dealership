import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsServices: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsServices.fillBrandsWithSeedData(BRANDS_SEED);

    return `Seed Succefull`;
  }
}
