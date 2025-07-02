import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipo } from '../../equipos/entities/equipo.entity';
import { Torneo } from '../../torneos/entities/torneo.entity';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column()
  resultado: string;

  @ManyToOne(() => Equipo, equipo => equipo.partidosLocal, { eager: true })
  local: Equipo;

  @ManyToOne(() => Equipo, equipo => equipo.partidosVisitante, { eager: true })
  visitante: Equipo;

  @ManyToOne(() => Torneo, torneo => torneo.partidos, { eager: true })
  torneo: Torneo;
}
