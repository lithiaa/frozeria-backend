import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  item_name!: string;

  @IsInt()
  categoryId!: number;

  @IsInt()
  @Min(0)
  stock_amount!: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  minimum_stock?: number;

  @IsNumber()
  @Min(0)
  selling_price!: number;

  @IsNumber()
  @Min(0)
  purchase_price!: number;

  @IsOptional()
  @IsString()
  weight_size?: string;

  @IsString()
  @IsNotEmpty()
  unit!: string;

  @IsOptional()
  @IsString()
  save_location?: string;

  @IsOptional()
  @IsString()
  description?: string;
}