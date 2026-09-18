import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConceitosManualModule } from '../conceitos-manual/conceitos-manual.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ ConceitosManualModule,
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'curso-nest',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
