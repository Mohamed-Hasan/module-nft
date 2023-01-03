import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsString, IsOptional } from 'class-validator';

export class GetOwnerBalanceRequestQueryDto {
  @ApiPropertyOptional({
    description: 'Contract Addresses',
    type: String,
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  contractAddresses: string[];
}
