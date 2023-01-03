import { ApiProperty } from '@nestjs/swagger';

export class ListContractCommonOwnersResponseDto {
  @ApiProperty({
    description: 'Http Response Status',
    example: 'ok',
  })
  status?: string = 'ok';

  @ApiProperty({
    description: 'common owners addresses',
    example: ['0xfe348a1c6401b6a5c01bd4deef7bbac9148be0ce', '0xfe348a1c6401b6a5c01bd4deef7bbac9148be0c1'],
  })
  data: string[];

  constructor(owners: string[]) {
    this.data = owners;
  }
}
