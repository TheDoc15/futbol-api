import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Jugador } from '../../jugadores/entities/jugador.entity';
import { Partido } from '../../partidos/entities/partido.entity';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  @Column()
  estadio: string;

  @Column()
  fundacion: number;

  @OneToMany(() => Jugador, jugador => jugador.equipo)
  jugadores: Jugador[];

  @OneToMany(() => Partido, partido => partido.local)
  partidosLocal: Partido[];

  @OneToMany(() => Partido, partido => partido.visitante)
  partidosVisitante: Partido[];
}
