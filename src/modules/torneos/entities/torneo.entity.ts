import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partido } from '../../partidos/entities/partido.entity';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  pais: string;

  @Column()
  anio: number;

  @OneToMany(() => Partido, partido => partido.torneo)
  partidos: Partido[];
}
