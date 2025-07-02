// create-partido.dto.ts
import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreatePartidoDto {
  @IsDateString()
  fecha: string;

  @IsString()
  resultado: string;

  @IsInt()
  localId: number;

  @IsInt()
  visitanteId: number;

  @IsInt()
  torneoId: number;
}
