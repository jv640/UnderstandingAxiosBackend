import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class InputDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, type: String, nullable: false })
  input1: string;

  @IsString()
  @ApiProperty({ type: String, nullable: false })
  @IsNotEmpty()
  input2: string;
}
