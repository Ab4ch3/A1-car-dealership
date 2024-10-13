import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
}
