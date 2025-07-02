import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EquiposModule } from './modules/equipos/equipos.module';
import { JugadoresModule } from './modules/jugadores/jugadores.module';
import { TorneosModule } from './modules/torneos/torneos.module';
import { PartidosModule } from './modules/partidos/partidos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'futbol',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EquiposModule,
    JugadoresModule,
    TorneosModule,
    PartidosModule,
  ],
})
export class AppModule {}
