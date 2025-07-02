import { IsString, IsInt } from 'class-validator';

export class CreateEquipoDto {
  @IsString()
  nombre: string;

  @IsString()
  ciudad: string;

  @IsString()
  estadio: string;

  @IsInt()
  fundacion: number;
}

