import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingDto } from './create-building.dto.js';

export class UpdateBuildingDto extends PartialType(CreateBuildingDto) {
    code!: string;
    name!: string;
    yearBuilt!: number;
    address!: string;
}
