import { IsString, IsInt } from 'class-validator';

export class CreateJugadorDto {
  @IsString()
  nombre: string;

  @IsString()
  posicion: string;

  @IsInt()
  edad: number;

  @IsInt()
  equipoId: number;
}
