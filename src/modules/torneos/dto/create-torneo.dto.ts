// create-torneo.dto.ts
import { IsString, IsInt } from 'class-validator';

export class CreateTorneoDto {
  @IsString()
  nombre: string;

  @IsString()
  pais: string;

  @IsInt()
  anio: number;
}
