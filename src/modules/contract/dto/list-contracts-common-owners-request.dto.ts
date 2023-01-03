import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ArrayMinSize, IsString } from 'class-validator';

export class ListContractsCommonOwnersRequestQueryDto {
  @ApiProperty({
    description: 'Contracts Addresses',
    type: String,
    isArray: true,
    minItems: 1,
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(2)
  contractAddresses: string[];
}
