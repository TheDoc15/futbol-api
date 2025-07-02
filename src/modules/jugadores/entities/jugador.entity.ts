import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipo } from '../../equipos/entities/equipo.entity';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  posicion: string;

  @Column()
  edad: number;

  @ManyToOne(() => Equipo, equipo => equipo.jugadores, { eager: true })
  equipo: Equipo;
}
