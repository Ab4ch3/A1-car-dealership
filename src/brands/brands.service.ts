import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: ' Toyota',
    //   createAt: new Date().getTime(),
    // },
  ];

  async create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };

    await this.brands.push(brand);

    return brand;
  }

  async findAll() {
    return await this.brands;
  }

  async findOne(id: string) {
    const brand = await this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id "${id}" not found`);

    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    let branDB = await this.findOne(id);

    this.brands.map((brand) => {
      if (brand.id === id) {
        branDB[`updatedAt`] = new Date().getTime();
        branDB = { ...brand, ...updateBrandDto, id };
        return brand;
      }
      return branDB;
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  async fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
